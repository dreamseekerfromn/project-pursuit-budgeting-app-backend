const express = require("express");
const incomes = express.Router();
//const incomesArray = require('../models/income.js');
//const validateURL = require("../models/validateURL.js");

incomes.get("/", (req, res) => {
    if(req.query.length === 0){
        //do something
    }
    else{
        //do something
    }
    res.status(200).send("");
});

/** page 404 */
incomes.get("*", (req, res) => {
    res.status(404).send("");
});

module.exports = incomes;