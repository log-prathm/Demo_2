const express = require("express");
const path = require("path");

const app = express();


app.get("/next", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/template/next.html"));
});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/template/index.html"));
});

module.exports = app;