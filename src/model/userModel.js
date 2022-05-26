const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

// async function executeDb(sql, dataToDbArr) {
//   let conn;
//   try {
//     conn = await mysql.createConnection(dbConfig);
//     const [result] = await conn.execute(sql, dataToDbArr);
//     return result;
//   } catch (error) {
//     console.log('error in executeDb ===', error);
//     throw error;
//   } finally {
//     conn?.end();
//   }
// }

// function saveUser(fullName, email, password) {
//   const sql = 'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)';
//   return executeDb(sql, [fullName, email, password]);
// }

// function findUserByEmail(email) {
//   const sql = 'SELECT * FROM users WHERE email = ?';
//   return executeDb(sql, [email]);
// }

async function saveUser(fullName, email, password) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const sql = 'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)';
    const [result] = await conn.execute(sql, [fullName, email, password]);
    return result;
  } catch (error) {
    console.log('error saveUser', error);
    return false;
  } finally {
    conn?.end();
  }
}

async function findUserByEmail(email) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const sql = 'SELECT * FROM users WHERE email = ?';
    const [result] = await conn.execute(sql, [email]);
    return result[0];
  } catch (error) {
    console.log('error findUserByEmail', error);
    return false;
  } finally {
    conn?.end();
  }
}

module.exports = {
  saveUser,
  findUserByEmail,
};
