const { getGroups } = require('../model/groupModel');

async function getUserGroups(req, res) {
  try {
    const getAllGroups = await getGroups();
    res.json(getAllGroups);
  } catch (error) {
    console.log('error in getUserGroups ===', error);
    res.sendStatus(500);
  }
}

module.exports = {
  getUserGroups,
};
