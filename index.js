const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello World");
});

app.get("/login", (req, res) => {
  res.send("<h1> Login Here:  </h1>");
});

app.get("/signup", (req, res) => {
  res.send("<h1> Signup Here:  </h1>");
});

app.get("/account", (req, res) => {
  res.send("<h1>Shubham Singh</h1>");
});

app.listen(port, () => {
  console.log(`App is listening om ${port}`);
});
