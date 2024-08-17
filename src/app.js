'use strict';
const express = require('express');

// App
const app = express();
app.get('/hello', (req, res) => {
  res.status(200).json({
    message: "Hello World!"
  });
});

module.exports = { app };