const { Router } = require('express');
const categoryController = require('../controllers/categoryController.js');

const router = Router();

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getById);
router.post('/', categoryController.create);
router.put('/', categoryController.update);
router.delete('/:id', categoryController.delete);

module.exports = router;
