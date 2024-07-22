const User = require("../models/userModel");
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
  } catch {}
};
