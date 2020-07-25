const connection = require("../../connection");

class TagModel {
  static postTag(req, callback) {
    connection.query('INSERT INTO tags SET ?', [req.body], (err, results) => {
      callback(err, results);
    });
  }

  static putTag(req, callback) {
    connection.query('UPDATE tags SET ? WHERE tag_id = ?', [req.body, req.params.id], (err, results) => {
        callback(err, results);
      });
  }

  static getAllTag(req, callback) {
    connection.query('SELECT * FROM tags ORDER BY tag_id ASC', (err, results) => {
      callback(err, results);
    });
  }

  static getOneTag(req, callback) {
    connection.query(
      'SELECT * FROM tags WHERE tag_id = ?',
      req.params.id,
      (err, results) => {
        callback(err, results);
      },
    );
  }

  static deleteCategory(req, callback) {
    connection.query(
      'DELETE FROM tags WHERE tag_id = ?',
      req.params.id,
      (err, results) => {
        callback(err, results);
      },
    );
  }
}

module.exports = { TagModel };
