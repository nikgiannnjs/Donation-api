const User = require("../models/userModel");
require("dotenv").config();
const paystack = require("paystack-api")(process.env.PAYSTACK_SECRET_KEY);

exports.createUser = async (req, res) => {
  try {
    const { firstname, lastname, email } = req.body;

    const user = new User({
      firstname,
      lastname,
      email,
    });

    await user.save();

    res.status(201).json({
      data: user,
      message: "User created succesfully",
    });
  } catch {
    res.status(500).json({
      message: "Something went wrong while trying to create user.",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id);

    res.status(201).json({
      data: user,
      message: "User found in database",
    });
  } catch {
    res.status(500).json({
      message: "Something went wrong while trying to find user.",
    });
  }
};

exports.initializeTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res
        .status(404)
        .send({ message: "User does not exist. Please log in or sign up" });
    } else {
      const { email, amount } = req.body;
      const response = await paystack.transaction.initialize({
        email,
        amount,
      });

      const paystack_ref = { paystack_ref: response.data.reference };
      await User.findByIdAndUpdate(id, paystack_ref);

      res.status(201).send({
        data: response.data,
        message: "Authorization URL created successfully",
        status: response.status,
      });
    }
  } catch (error) {
    console.error("Error initializing transaction:", error);
    res.status(500).send({
      message:
        "Something went wrong while trying to initiate transaction. Please try again later.",
      error: error.message,
    });
  }
};
