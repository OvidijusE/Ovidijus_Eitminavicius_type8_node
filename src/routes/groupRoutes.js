const express = require('express');
const controller = require('../controllers/groupController');
const { validateToken } = require('../middleware');

const groupRoutes = express.Router();

groupRoutes.get('/groups', validateToken, controller.getUserGroups);

module.exports = groupRoutes;
