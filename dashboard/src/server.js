const express = require("express");
const app = express();

const path = require("path");
const fs = require("fs");

app.use("/", express.static(path.resolve(__dirname, "../build")));

app.get("*", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../build/dashboard.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.listen(9000, () => {
  console.log("Dashboard Application is running on http://localhost:9000/");
});
