const express = require("express");
const spending = express.Router();
const spendingArray = require('../models/spending.js');
//const validateURL = require("../models/validateURL.js");

/** get */
spending.get("/", (req, res) => {
    if(req.query.length === 0){
        //no query, show everything
        res.status(200).json(spendingArray);
    }
    else{
        //do something for queries
        res.status(200).json(spendingArray);
    }
});

/** get w/ date parameter */
spending.get("/:dateSpending", (req, res) => {
    const { dateSpending } = req.params;
    let result = spendingArray.filter(item => item.date == dateSpending);
    res.status(200).json(result);
});

/** post */
spending.post("/",  (req, res) => {
    spendingArray.push(req.body);
    res.status(201).json(spendingArray[spendingArray.length - 1]);
});

/** delete */
spending.delete("/:id", (req, res) => {
    const { id } = req.params;
    //working
    let arrayIndex = spendingArray.findIndex(item => item.id === id);
    if(arrayIndex || arrayIndex == 0){
        let deletedLog = spendingArray.splice(arrayIndex, 1);
        console.log("delete something!")
        res.status(200).send(`item id ${id} has been deleted\n`);
    }
    else{
        res.status(404).redirect("/9001");
    }
});

/** PUT */
spending.put("/:id", (req, res) => {
    const { id } = req.params;
    let arrayIndex = spendingArray.findIndex(item => item.id === id);
    if(arrayIndex || arrayIndex == 0){
        let deletedLog = spendingArray.splice(arrayIndex, 1);
        console.log("delete something!")
        res.status(200).send(`item id ${id} has been deleted\n`);
    }
    else{
        res.status(404).redirect("/9001");
    }
});
/** page 404 */
spending.get("*", (req, res) => {
    res.status(404).send("");
});

module.exports = spending;