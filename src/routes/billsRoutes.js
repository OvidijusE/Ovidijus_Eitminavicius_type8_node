const express = require('express');
const { validateToken } = require('../middleware');
const controller = require('../controllers/billsController');

const billRoutes = express.Router();

billRoutes.get('/bills/:group_id', validateToken, controller.billbyGroupId);

billRoutes.post('/bills', validateToken, controller.addNewBill);

module.exports = {
  billRoutes,
};
