const express = require("express");
const income = express.Router();
let incomeArray = require('../models/income.js');
//const validateURL = require("../models/validateURL.js");

/** get */
income.get("/", (req, res) => {
    if(req.query.length === 0){
        //no query, show everything
        res.status(200).json(incomeArray);
    }
    else{
        //do something for queries
        res.status(200).json(incomeArray);
    }
});

income.get("/date", (req, res) => {
    let dateResult = {};
    for(let index of incomeArray){
        if(!dateResult[index.date]){
            dateResult[index.date] = [];
        }
        dateResult[index.date].push(index.id);
    }
    res.status(200).json(dateResult);
})

/** get w/ date parameter */
income.get("/date/:dateincome", (req, res) => {
    const { dateincome } = req.params;
    let result = incomeArray.filter(item => item.date == dateincome);
    res.status(200).json(result);
});

income.get("/:id", (req, res) => {
    const { id } = req.params;
    let result = incomeArray.filter(item => item.id === id);
    res.status(200).json(result);
})

/** post */
income.post("/",  (req, res) => {
    incomeArray.push(req.body);
    res.status(201).json(incomeArray[incomeArray.length - 1]);
});

/** delete */
income.delete("/:id", (req, res) => {
    const { id } = req.params;
    //working
    let arrayIndex = incomeArray.findIndex(item => item.id === id);
    if(arrayIndex || arrayIndex == 0){
        let deletedLog = incomeArray.splice(arrayIndex, 1);
        console.log("delete something!")
        res.status(200).send(`item id ${id} has been deleted\n`);
    }
    else{
        res.status(404).redirect("/9001");
    }
});

/** PUT */
income.put("/:id", (req, res) => {
    const { id } = req.params;
    let arrayIndex = incomeArray.findIndex(item => item.id === id);
    if(arrayIndex || arrayIndex == 0){
        incomeArray.splice(arrayIndex, 1, req.body);
        console.log("updated something!");
        console.log(incomeArray);
        res.status(200).send(`item id ${id} has been updated\n`);
    }
    else{
        res.status(404).redirect("/9001");
    }
});
/** page 404 */
income.get("*", (req, res) => {
    res.status(404).send({error: "error"});
});

module.exports = income;