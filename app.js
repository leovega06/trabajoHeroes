const express = require("express");
const app = express();
const port = 3030;
const path = require("path");

app.use(express.static("DH-Heroes"));

app.get("/",(req,res) => res.sendFile(path.join(__dirname,"DH-Heroes","views","index.html")));
app.get("/babbage",(req,res) => res.sendFile(path.join(__dirname,"DH-Heroes","views","babbage.html")));
app.get("/turing",(req,res) => res.sendFile(path.join(__dirname,"DH-Heroes","views","turing.html")));
app.get("/hopper",(req,res) => res.sendFile(path.join(__dirname,"DH-Heroes","views","hopper.html")));
app.get("/berners-lee",(req,res) => res.sendFile(path.join(__dirname,"DH-Heroes","views","berners-lee.html")));
app.get("/lovelace",(req,res) => res.sendFile(path.join(__dirname,"DH-Heroes","views","lovelace.html")));
app.get("/clarke",(req,res) => res.sendFile(path.join(__dirname,"DH-Heroes","views","clarke.html")));
app.get("/hamilton",(req,res) => res.sendFile(path.join(__dirname,"DH-Heroes","views","hamilton.html")));


app.listen(port,()=> console.log("servidor corriendo en http://localhost:" + port))
