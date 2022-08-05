const express = require("express");
const dotenv = require("dotenv");
const articles = require("./dummydata/articles");

dotenv.config();
const PORT = process.env.PORT || 5000;

const server = express();

server.get("/", (req, res) => {
  res.send("API is Running");
});

server.get("/api/articles/:id", (req, res) => {
  const article = articles.find((n) => n._id === req.params.id);
  res.json(article);
});

server.listen(PORT, console.log(`Server is running on port ${PORT}`));
