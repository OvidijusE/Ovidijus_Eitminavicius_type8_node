const express = require('express');
const bcrypt = require('bcryptjs');
const { validateUser } = require('../middleware');
const { findUserByEmail, saveUser, assignGroup } = require('../model/userModel');
const { hashPassword, passWordsMatch, generateJwtToken } = require('../utils/helper');

const userRoutes = express.Router();

userRoutes.post('/register', validateUser, async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const plainTextPassword = password;
    const hashedPassword = bcrypt.hashSync(plainTextPassword, 10);

    const newUser = {
      fullName,
      email,
      password: hashedPassword,
    };
    const insertResult = await saveUser(newUser.fullName, newUser.email, newUser.password);

    if (insertResult === false) {
      res.status(500).json('something wrong');
      return;
    }
    res.status(201).json('user created');
  } catch (error) {
    console.log('error in register user ===', error);
    res.status(500).json('Cannot create user');
  }
});

userRoutes.post('/login', validateUser, async (req, res) => {
  const receivedEmail = req.body.email;
  const receivedPassword = req.body.password;

  const foundUserArr = await findUserByEmail(receivedEmail);

  const foundUser = foundUserArr[0];

  if (!foundUser) {
    res.status(400).json('Email or password not found');
  }
  if (!passWordsMatch(receivedPassword, foundUser.password)) {
    res.status(400).json('Email or password not found');
  }

  const payload = { userId: foundUser.id };
  const token = generateJwtToken(payload);
  res.json({ success: true, token });
});

module.exports = userRoutes;
