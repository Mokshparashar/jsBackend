require("dotenv").config();
const express = require("express");
const data = require("./json");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
console.log(data);
const corsOptions = {
  origin: "https://worldFactz.netlify.app",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

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
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
