const express = require("express");
const {Income} =require("../models/income");
const { Expense} = require("../models/expense");
const homeControllers = require("../controllers/home");
const router = express.Router();

router.get("/", homeControllers.getHomePage); 

module.exports = router;