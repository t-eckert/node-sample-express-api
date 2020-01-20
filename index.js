const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const name = req.query.name || "world";
  res.send(`Hello ${name}.`);
});

app.listen(3000);
