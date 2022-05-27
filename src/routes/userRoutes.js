const express = require('express');

const { validateUser } = require('../middleware');
const controller = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.post('/register', validateUser, controller.registerUser);

userRoutes.post('/login', validateUser, controller.loginUser);

module.exports = userRoutes;
