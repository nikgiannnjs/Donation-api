const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const app = require("./app.js");
require("dotenv").config();

const port = process.env.PORT || 3000;
const mongoString = process.env.DATABASE_URL;

//MongoDB Connection
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

//Server Connection
app.listen(port, console.log(`Server is running on port ${port}`));
