const express = require("express");
const outcomes = express.Router();
//const outcomesArray = require('../models/outcome.js');
//const validateURL = require("../models/validateURL.js");

outcomes.get("/", (req, res) => {
    if(req.query.length === 0){
        //do something
    }
    else{
        //do something
    }
    res.status(200).send("");
});

/** page 404 */
outcomes.get("*", (req, res) => {
    res.status(404).send("");
});

module.exports = outcomes;