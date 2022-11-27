"use strict";
const express = require("express");
const app = express();
const routes = require("./src/routes/index");
const cors = require("cors");

app.listen(3001, () => console.log("Server running from app"));

app.use(cors());
app.use("/", routes);
