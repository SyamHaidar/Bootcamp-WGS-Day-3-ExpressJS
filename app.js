const express = require("express");
const path = require("path");
const router = express.Router();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/contact.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.use("/", (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "/404.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
