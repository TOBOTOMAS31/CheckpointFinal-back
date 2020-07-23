const { TagModel } = require('../models/tagModel');

class TagController {
  static postTag(req, res) {
    TagModel.postTag(req, (err, results) => {
      if (err) {
        return res.status(500).json({ error: `${err}` });
      }
      return res
        .status(200)
        .json({ message: 'OK', dataSend: req.body, affectedRows: results.affectedRows });
    });
  }

  static putTag(req, res) {
    TagModel.putTag(req, (err, results) => {
      if (err) {
        return res.status(500).json({ error: `${err}` });
      }
      return res
        .status(200)
        .json({ message: 'OK', dataSend: req.body, affectedRows: results.affectedRows });
    });
  }

  static getAllTag(req, res) {
    TagModel.getAllTag(req, (err, results) => {
      if (err) {
        return res.status(404).json({ error: err.message, sql: err.sql });
      }
      return res.status(200).json(results);
    });
  }

  static getOneTag(req, res) {
    TagModel.getOneTag(req, (err, result) => {
      if (err) {
        return res.status(404).json({ error: err.message, sql: err.sql });
      }
      return res.status(200).json(result[0]);
    });
  }

  static deleteTag(req, res) {
    TagModel.deleteTag(req, (err) => {
      if (err) {
        return res.status(404).json({ error: err.message, sql: err.sql });
      }
      return res.status(200).json({ message: 'Tag deleted' });
    });
  }
}

module.exports = { TagController };
