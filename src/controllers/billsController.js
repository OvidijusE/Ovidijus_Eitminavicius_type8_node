const { getBillbyGroupId, addBill } = require('../model/billsModel');

async function billbyGroupId(req, res) {
  const { group_id } = req.params;
  try {
    const billByGroupIdArr = await getBillbyGroupId(group_id);
    res.json(billByGroupIdArr);
  } catch (error) {
    console.log('error in billbyGroupId ===', error);
    res.sendStatus(500);
  }
}

async function addNewBill(req, res) {
  const { group_id } = req.query;
  const { amount, description } = req.body;
  try {
    const saveResult = await addBill(group_id, amount, description);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Bill successfully added');
      return;
    }
    res.status(400).json('Bill not added');
  } catch (error) {
    console.log('error in addNewBill ===', error);

    res.sendStatus(500);
  }
}

module.exports = {
  billbyGroupId,
  addNewBill,
};
