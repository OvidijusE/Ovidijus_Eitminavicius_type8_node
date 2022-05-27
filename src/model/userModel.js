const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

async function executeDb(sql, dataToDbArr) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, dataToDbArr);
    return result;
  } catch (error) {
    console.log('error in executeDb ===', error);
    throw error;
  } finally {
    conn?.end();
  }
}

function saveUser(full_name, email, password) {
  const sql = 'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)';
  return executeDb(sql, [full_name, email, password]);
}

function findUserByEmail(email) {
  const sql = 'SELECT * FROM users WHERE email = ?';
  return executeDb(sql, [email]);
}

module.exports = {
  saveUser,
  findUserByEmail,
};
