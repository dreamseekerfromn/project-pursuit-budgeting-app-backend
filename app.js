const express = require("express");
const cors = require("cors");
const app = express();
const spendingController = require('./controllers/spending.controller.js');

app.use(cors());
app.use(express.json());

// root
app.get("/", (request, response) => {
    response.send("Hello, world!");
});

app.use("/spending", spendingController);

// 404 Page not found
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = app;