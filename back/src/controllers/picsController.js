const { PicsModel } = require("../models/picsModel");

class PicsController {
  static postPic(req, res) {
    PicsModel.postPic(req, (err, result) => {
      if (err) {
        return res.status(500).json({ error: `${err}` });
      }
      req.pic_id = result.insertId;
      const pictures_pic_id = req.pic_id;
      return PicsModel.addTagsToPic(req, pictures_pic_id, (err, results) => {
        if (err) {
          return res.status(500).json({ error: `${err}` });
        }
        return res.status(200).json(results);
      });
    });
  }

  static addTagsToPic(req, res) {
    PicModel.addTagsToPic(req, (err, results) => {
      if (err) {
        return res.status(500).json({ error: `${err}` });
      }
      return res.status(200).json({
        message: "OK",
        dataSend: req.body,
        affectedRows: results.affectedRows,
      });
    });
  }

  static getAllPics(req, res) {
    const { category, tag } = req.query;
    if (category) {
      PicsModel.getAllPicsFromCategory(req, category, (err, results) => {
        if (err) {
          return res.status(500).json({ error: `${err}` });
        }
        return res.status(200).json(results);
      });
    }
    if (tag) {
      PicsModel.getAllPicsFromTag(req, tag, (err, results) => {
        if (err) {
          return res.status(500).json({ error: `${err}` });
        }
        return res.status(200).json(results);
      });
    } else if (!category && !tag) {
      PicsModel.getAllPics(req, (err, results) => {
        if (err) {
          return res.status(500).json({ error: `${err}` });
        }
        return res.status(200).json(results);
      });
    }
  }

  static putPic(req, res) {
    PicsModel.putPic(req, (err) => {
      if (err) {
        return res.status(500).json({ error: `${err}` });
      }
      req.pic_id = req.params.id;
      if (req.body.tags_tag_id.length === 0) {
        return res.status(200).json("ok");
      }
      const pictures_pic_id = req.pic_id;
      return PicsModel.deletePicFromJoinTable(req, pictures_pic_id, (err2) => {
        if (err2) {
          return res.status(500).json({ error: `${err2}` });
        }
        return PicsModel.addTagsToPic(req, pictures_pic_id, (err1, result1) => {
          if (err1) {
            return res.status(500).json({ error: `${err1}` });
          }
          return res.status(200).json(result1);
        });
      });
    });
  }

  static deletePic(req, res) {
    PicsModel.deletePic(req, (err) => {
      if (err) {
        return res.status(500).json({ error: `${err}` });
      }
      req.pic_id = req.params.id;
      const pictures_pic_id = req.pic_id;
      return PicsModel.deletePicFromJoinTable(req, pictures_pic_id, (err2) => {
        if (err2) {
          return res.status(500).json({ error: `${err2}` });
        }
        return res.status(200).json({ message: "Picture deleted" });
      });
    });
  }

  static getOnePic(req, res) {
    PicsModel.getOnePic(req, (err, results) => {
      if (err) {
        return res.status(500).json({ error: `${err}` });
      }
      return res.status(200).json(results[0]);
    });
  }
}

module.exports = { PicsController };
