const connection = require("../../connection");

class CategoryModel {
  static postCategory(req, callback) {
    connection.query('INSERT INTO category SET ?', [req.body], (err, results) => {
      callback(err, results);
    });
  }

  static putCategory(req, callback) {
    connection.query('UPDATE category SET ? WHERE cat_id = ?', [req.body, req.params.id], (err, results) => {
        callback(err, results);
      });
  }

  static getAllCategory(req, callback) {
    connection.query('SELECT * FROM category ORDER BY cat_id ASC', (err, results) => {
      callback(err, results);
    });
  }

  static getOneCategory(req, callback) {
    connection.query(
      'SELECT * FROM category WHERE cat_id = ?',
      req.params.id,
      (err, results) => {
        callback(err, results);
      },
    );
  }
}

module.exports = { CategoryModel };
