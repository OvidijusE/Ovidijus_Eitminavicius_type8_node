const express = require('express');
const bcrypt = require('bcryptjs');
const { assignGroup } = require('../model/accountModel');

const accountRoutes = express.Router();

accountRoutes.post('/accounts', async (req, res) => {
  try {
    const { group_id, user_id } = req.body;
    const groupsArr = await assignGroup(group_id, user_id);
    res.json(groupsArr);
  } catch (error) {
    console.log('error in assign groups ===', error);
    res.sendStatus(500);
  }
});

module.exports = accountRoutes;
