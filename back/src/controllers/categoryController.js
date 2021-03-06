const { CategoryModel } = require('../models/categoryModel');

class CategoryController {
  static postCategory(req, res) {
    CategoryModel.postCategory(req, (err, results) => {
      if (err) {
        return res.status(500).json({ error: `${err}` });
      }
      return res
        .status(200)
        .json({ message: 'OK', dataSend: req.body, affectedRows: results.affectedRows });
    });
  }

  static putCategory(req, res) {
    CategoryModel.putCategory(req, (err, results) => {
      if (err) {
        return res.status(500).json({ error: `${err}` });
      }
      return res
        .status(200)
        .json({ message: 'OK', dataSend: req.body, affectedRows: results.affectedRows });
    });
  }

  static getAllCategory(req, res) {
    CategoryModel.getAllCategory(req, (err, results) => {
      if (err) {
        return res.status(404).json({ error: err.message, sql: err.sql });
      }
      return res.status(200).json(results);
    });
  }

  static getOneCategory(req, res) {
    CategoryModel.getOneCategory(req, (err, result) => {
      if (err) {
        return res.status(404).json({ error: err.message, sql: err.sql });
      }
      return res.status(200).json(result[0]);
    });
  }

  static deleteCategory(req, res) {
    CategoryModel.deleteCategory(req, (err) => {
      if (err) {
        return res.status(404).json({ error: err.message, sql: err.sql });
      }
      return res.status(200).json({ message: 'Category deleted' });
    });
  }
}

module.exports = { CategoryController };
