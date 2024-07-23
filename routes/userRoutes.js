const express = require("express");
const userRoute = express.Router();
const userController = require("../controllers/userController");

userRoute.post("/createuser", userController.createUser);
userRoute.get("/getuser/:id", userController.getUser);
// prettier-ignore
userRoute.post("/transactioninitiation/:id", userController.initializeTransaction);
// prettier-ignore
userRoute.post("/transactionverification/:id", userController.verifyTransaction);

module.exports = userRoute;
