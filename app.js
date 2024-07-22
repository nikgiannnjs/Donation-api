const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.use("/users", userRoute);

module.exports = app;
