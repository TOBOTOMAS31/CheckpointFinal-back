require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const routes = require('./routes');

app.use('/', routes);

const server = app.listen(PORT, (error) => {
    if(error) {
        console.log('Il y a une erreur', error);
    }
    console.log(`🌍 Server is running on port ${PORT} `);
  });

  module.exports = server;