const express = require("express");
const serverless = require("serverless-http");

const app = express();
app.listen(3000, console.log("mandeha..."));


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/views/index.html");
});

app.get("/autre", (req, res)=>{
    res.sendFile(__dirname+"/views/autre.html");
});

app.get("/autre2", (req, res)=>{
    res.sendFile(__dirname+"/views/autre2.html");
});


module.exports.handler = serverless(app);