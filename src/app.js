const express = require('express');
const routes = require('./routes'); //pega o index.js automaticamente


const app = express();


routes(app);

module.exports = app;
