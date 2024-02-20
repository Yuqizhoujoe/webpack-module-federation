const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// serving static files
app.use("/", express.static(path.resolve(__dirname, "../build")));

// route
app.get("/", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../build/hello-world.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.listen(9001, () => {
  console.log("Application is running on http://localhost:9001");
});
