'use strict'
const { Router } = require('express');
const express = require('express')
const router = Router();
const {getAllItems} = require("../controllers/index")


router.get('/', getAllItems);


module.exports = router