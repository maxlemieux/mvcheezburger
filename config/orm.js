const connection = require('../config/connection.js');

// Object for all our SQL statement functions.
const orm = {
  selectAll: function(table, cb) {
    const sql = 'SELECT * FROM ??';
    connection.query(sql, [table], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, objColVals, cb) {
    const sql = 'INSERT INTO ?? SET ?';
    connection.query(sql, [table, objColVals], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, objColVals, conditionObj, cb) {
    var sql = 'UPDATE ?? SET ? WHERE ?';
    connection.query(sql, [table, objColVals, conditionObj], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
