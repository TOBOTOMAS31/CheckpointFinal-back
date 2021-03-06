const express = require('express');
const bcrypt = require('bcrypt');
const util = require('util');
const connection = require("../../connection");

const queryAsync = util.promisify(connection.query).bind(connection);

const router = express.Router({ mergeParams: true });

router.post('', async (req, res) => {
  const { admin_mail, admin_password } = req.body;
  console.log('ICI', req.body);
  try {
    const result = await queryAsync('SELECT * FROM admin WHERE admin_mail = ?', admin_mail);
    const test = bcrypt.compareSync(admin_password, result[0].admin_password); // true
    if (test) {
      res.status(200).json({ message: 'OK' });
    } else {
      res.status(500).send({ message: 'Mot de passe invalide' });
    }
  } catch (err) {
    console.log('catch error', err);
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;