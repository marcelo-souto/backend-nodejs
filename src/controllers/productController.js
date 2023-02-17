const Product = require('../models/Product.js');
const Category = require('../models/Category.js');
const validate = require('../functions/validate.js');

const productController = {
  getAll: async (req, res) => {
    try {
      const products = await Product.findAll({
        attributes: {
          exclude: 'categoryId',
        },
        include: {
          model: Category,
          as: 'category',
          attributes: {
            exclude: 'id',
          },
        },
      });
      return res.status(200).json(products);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id, {
        include: 'category',
      });

      if (!product)
        return res
          .status(404)
          .json({ error: `O produto com id ${id} não foi encontrado` });

      return res.status(200).json(product);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  create: async (req, res) => {
    let { name, description, categoryId, price } = req.body;

    if (price && typeof price === 'number') price = price.toFixed(2);

    try {
      validate({ nome: name, isRequired: true });
      validate({ descricao: description, isRequired: true });
      validate({ categoria: categoryId, type: 'number', isRequired: true });
      validate({ preco: price, type: 'money', isRequired: true });

      const product = await Product.create({
        name,
        description,
        price: Number(price),
        categoryId: Number(categoryId),
      });

      return res.status(201).json(product);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  update: async (req, res) => {
    const { id, name, description, categoryId, price } = req.body;
    try {
      const product = await Product.findByPk(id);
      if (!product)
        return res
          .status(404)
          .json({ error: `O produto com id ${id} não foi encontrado` });

      if (price && typeof price === 'number') price = price.toFixed(2);

      validate({ nome: name });
      validate({ descricao: description });
      validate({ categoria: categoryId, type: 'number' });
      validate({ preco: price, type: 'money' });

      const updatedProduct = await product.update({
        name,
        description,
        price: Number(price) ? Number(price) : product.price,
        categoryId: Number(categoryId) ? Number(price) : product.categoryId,
      });

      return res.status(200).json(updatedProduct);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id);

      if (!product)
        return res
          .status(404)
          .json({ error: `O produto com id ${id} não foi encontrado` });

      const deletedProduct = await product.destroy();
      return res.status(200).json({
        message: `O produto ${deletedProduct.name} foi deletado com sucesso.`,
      });
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};

module.exports = productController;
