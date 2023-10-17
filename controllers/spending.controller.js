const express = require("express");
const spending = express.Router();
//const spendingArray = require('../models/spending.js');
//const validateURL = require("../models/validateURL.js");

spending.get("/", (req, res) => {
    if(req.query.length === 0){
        //do something
    }
    else{
        //do something
    }
    res.status(200).send("");
});

spending.get("/:dateSpending", (req, res) => {
    const { dateSpending } = req.params;
    
});


/** page 404 */
spending.get("*", (req, res) => {
    res.status(404).send("");
});

module.exports = spending;