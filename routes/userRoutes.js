const express = require("express");
const userRoute = express.Router();
const userController = require("../controllers/userController");

userRoute.post("/createuser", userController.createUser);
userRoute.get("/getuser/:id", userController.getUser);
userRoute.post(
  "/transactioninitiation/:id",
  userController.initializeTransaction
);

module.exports = userRoute;
