'use strict'
const express = require('express');
const app = express();
const routes = require('./src/routes/index');


app.listen(3001,()=>
console.log("Server running from app"));


app.use('/', routes);
