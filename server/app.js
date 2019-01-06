const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

const controller = require('./controller');
app.use(cors("*"));
app.use('/api', controller);

module.exports = app;
