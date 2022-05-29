const express = require('express');
const controller = require('../controllers/accountController');
const { validateToken } = require('../middleware');

const accountRoutes = express.Router();

accountRoutes.post('/accounts', validateToken, controller.addUserToAccount);
accountRoutes.get('/accounts', validateToken, controller.userAccountJoin);

module.exports = accountRoutes;
