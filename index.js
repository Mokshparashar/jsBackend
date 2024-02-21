require("dotenv").config();
const express = require("express");
const data = require("./json");
const app = express();
const port = process.env.PORT;
console.log(data);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Twitter");
});
app.get("/login", (req, res) => {
  res.send("<h1>Login</h1>");
});
app.get("/api/adarsh", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
