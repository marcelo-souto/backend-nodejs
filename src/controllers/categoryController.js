const Product = require('../models/Product.js');
const Category = require('../models/Category.js');
const validate = require('../functions/validate.js');


const categoryController = {
  getAll: async (req, res) => {
    try {
      const category = await Category.findAll({
        include: {
          model: Product,
          as: 'products',
          attributes: {
            exclude: 'categoryId',
          },
        },
      });

      return res.json(category);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id, {
        include: {
          model: Product,
          as: 'products',
          attributes: {
            exclude: 'productId',
          },
        },
      });

      if (!category)
        return res
          .status(404)
          .json({ error: `A categoria com id ${id} não foi encontrada.` });

      return res.json(category);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  create: async (req, res) => {
    const { name } = req.body;
    try {
      validate({ nome: name, isRequired: true });

      const category = await Category.create({
        name,
      });

      return res.status(201).json(category);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  update: async (req, res) => {
    const { id, name } = req.body;
    try {
      const category = await Category.findByPk(id);

      if (!category)
        return res
          .status(404)
          .json({ error: `A categoria com id ${id} não foi encontrada.` });

      validate({ nome: name });

      const updatedCategory = await category.update({
        name: name ? name : category.name,
      });

      return res.status(200).json(updatedCategory);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);

      if (!category)
        return res
          .status(404)
          .json({ error: `A categoria com id ${id} não foi encontrada.` });

      const deletedCategory = await category.destroy();
      return res
        .status(200)
        .json(`A categoria ${deletedCategory.name} foi deletada com sucesso.`);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};

module.exports = categoryController;
