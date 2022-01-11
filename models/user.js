const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const SALT_ROUNDS = 10;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: {
      validator: ({ length }) => length >= 6,
      message: "Password should be at least 6 characters.",
    },
  },
  createdAt: String,
});

// Hash password
userSchema.pre("save", function () {
  if (!this.isModified("password")) return Promise.resolve;
  return bcrypt.hash(this.password, SALT_ROUNDS).then((hashResult) => {
    this.password = hashResult;
  });
});

userSchema.method.comparePassword = function compareUserPassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
