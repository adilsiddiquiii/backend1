require('dotenv').config()
const express = require("express");
const app = express();
const port = 5000``;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("adil bhai");
});

app.get("/login", (req, res) => {
  res.send('<h1>Adil Siddiqui</h1>');
});

app.get("/chai", (req, res) => {
  res.send("<h2>Chai or Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
