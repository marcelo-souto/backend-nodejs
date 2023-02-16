const { Router } = require('express')
const productController = require('../controllers/productController.js')

const router = Router()

router.get('/', productController.getAll)
router.get('/:id', productController.getById)
router.post('/', productController.create)
router.put('/', productController.update)
router.delete('/:id', productController.delete)

module.exports = router