const express = require('express');
const router = express.Router();
const categoryControllers = require('../controllers/categoryController');

router.get('/', categoryControllers.getAllCategory);

router.post('/', categoryControllers.createNewCategory);

router.patch('/:id', categoryControllers.updateCategory); // to edit we can use either put/patch, we use patch bz we only want to change few things

router.delete('/:id', categoryControllers.deleteCategory);

module.exports = router;