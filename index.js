const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Rayhan");
});

app.listen(port, () => {
  console.log("Backend start on ", port);
});
