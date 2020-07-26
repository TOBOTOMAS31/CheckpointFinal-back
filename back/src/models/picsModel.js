const connection = require("../../connection");

class PicsModel {
  static postPic(req, callback) {
    const { pic_link, pic_name, pic_description, category_cat_id } = req.body;
    const dataPic = {
      pic_link,
      pic_name,
      pic_description,
      category_cat_id,
    };
    connection.query(
      "INSERT INTO pictures SET ?",
      [dataPic],
      (err, results) => {
        callback(err, results);
      }
    );
  }

  static addTagsToPic(req, pictures_pic_id, callback) {
    const { tags_tag_id } = req.body;
    const multiTags = [];
    tags_tag_id.map((tagId) => multiTags.push([pictures_pic_id, tagId.tag_id]));
    console.log('multitags', multiTags)
    connection.query(
      "INSERT INTO pictures_has_tags (pictures_pic_id, tags_tag_id) VALUES ?",
      [multiTags],
      (err1, result1) => {
        console.log(result1);
        callback(err1, result1);
      }
    );
  }

  static getAllPics(req, callback) {
    connection.query(
      `SELECT pictures.*, category.cat_name 
        FROM pictures
        INNER JOIN category
        ON pictures.category_cat_id = category.cat_id
        ORDER BY pic_id ASC`,
      (err, results) => {
        callback(err, results);
      }
    );
  }

  static putPic(req, callback) {
    const { pic_link, pic_name, pic_description, category_cat_id } = req.body;
    const dataPic = {
      pic_link,
      pic_name,
      pic_description,
      category_cat_id,
    };
    connection.query(
      "UPDATE pictures SET ? WHERE pic_id = ?",
      [dataPic, req.params.id],
      (err, results) => {
        console.log(err);
        callback(err, results);
      }
    );
  }

  static deletePicFromJoinTable(req, pictures_pic_id, callback) {
    connection.query(
      `DELETE FROM pictures_has_tags 
      WHERE pictures_pic_id = ?`,
      pictures_pic_id,
      (err2, results2) => {
        callback(err2, results2);
      }
    );
  }

  static deletePic(req, callback) {
    connection.query(
      "DELETE FROM pictures WHERE pic_id = ?",
      req.params.id,
      (err, results) => {
        callback(err, results);
      }
    );
  }

  static getOnePic(req, cb) {
    connection.query(
      `SELECT pictures.*, category.cat_name 
        FROM pictures
        INNER JOIN category
        ON pictures.category_cat_id = category.cat_id
        WHERE pic_id = ?`,
      req.params.id,
      (err, results, fields) => {
        cb(err, results, fields);
      }
    );
  }

  static getAllPicsFromCategory(req, cat_id, callback) {
    connection.query(
      `SELECT pictures.*, category.cat_name 
          FROM pictures
          INNER JOIN category
          ON pictures.category_cat_id = category.cat_id
          WHERE category_cat_id = ?`,
      [cat_id],
      (err, results) => {
        callback(err, results);
      }
    );
  }

  static getAllPicsFromTag(req, tag, callback) {
    connection.query(
      `SELECT pictures.*, category.cat_name
          FROM pictures
          INNER JOIN pictures_has_tags
          ON pictures.pic_id = pictures_has_tags.pictures_pic_id
          INNER JOIN category
          ON pictures.category_cat_id = category.cat_id
          WHERE tags_tag_id = ?`,
      [tag],
      (err, results) => {
        callback(err, results);
      }
    );
  }
}

module.exports = { PicsModel };
