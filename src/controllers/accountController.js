const { assignGroup, joinGroup } = require('../model/accountModel');

async function addUserToAccount(req, res) {
  const { group_id, user_id } = req.body;
  const tokenFromHeaders = req.headers.authorization.split(' ')[1];
  const idfromToken = req.userId;
  try {
    const saveResult = await assignGroup(group_id, idfromToken);
    if (saveResult.affectedRows === 1) {
      res.sendStatus(201);
      return;
    }
    res.status(400).json('Cannot add account');
  } catch (error) {
    console.log('error in addUserToAccount ===', error);
    res.sendStatus(500);
  }
}

async function userAccountJoin(req, res) {
  const idfromToken = req.userId;
  try {
    const accountGroupArr = await joinGroup(idfromToken);
    res.json(accountGroupArr);
  } catch (error) {
    console.log('joinGroup error ===', error);
    res.sendStatus(500);
  }
}

module.exports = {
  addUserToAccount,
  userAccountJoin,
};
