const mysql = require('mysql');
const sqlLocalDb = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'PASSWORD',
  database: 'burgers_db'
};
const connection = mysql.createConnection(process.env.JAWSDB_URL || sqlLocalDb);

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
