const express = require('express');

const { validateUser, validateLogin } = require('../middleware');
const controller = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.post('/register', validateUser, controller.registerUser);

userRoutes.post('/login', validateLogin, controller.loginUser);

module.exports = userRoutes;
