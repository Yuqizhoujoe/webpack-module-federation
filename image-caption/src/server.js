const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use("/", express.static(path.resolve(__dirname, "../build")));

app.get("/", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../build/image-caption.html");
  const contentFromHtml = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtml);
});

app.listen(9003, () => {
  console.log("Image caption application is running on http://localhost:9003");
});
