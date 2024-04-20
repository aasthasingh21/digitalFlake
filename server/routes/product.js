const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productController');

router.get('/', productControllers.getAllProduct);

router.post('/', productControllers.createNewProduct);

router.patch('/:id', productControllers.updateProduct); // to edit we can use either put/patch, we use patch bz we only want to change few things

router.delete('/:id', productControllers.deleteProduct);

module.exports = router;