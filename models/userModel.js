const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
    lowercase: true,
  },

  paystack_ref: {
    type: String,
  },

  amountDonated: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
