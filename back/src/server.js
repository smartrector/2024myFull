const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());

const server = () => {
  app.get("/", function (req, res) {
    return res.send("hello");
  });

  app.listen(4000, function () {
    console.log("server on port 4000");
  });
};
server();
