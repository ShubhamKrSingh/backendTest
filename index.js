const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(port, () => {
  console.log(`App is listening om ${port}`);
});
