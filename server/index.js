const express = require("express");
const jwt=require("jsonwebtoken")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = new express();

dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./db/connection");
const Customer = require("./model/CustomerSchema");
const { urlencoded } = require("express");
// here we use middleware

app.use(require("./router/auth"));



// =========================================================== home page ====================================================

app.get("/", (req, res) => {
  res.send("Assalam o Alaikum this is home page");
});

app.listen(5400, () => {
  console.log("han g bhai apka apna server ban chuka ha ");
});
