const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userController');

router.post('/register', userControllers.registerUser);

router.post('/login', userControllers.loginUser);

router.get('/logout', userControllers.logoutUser);

module.exports = router;