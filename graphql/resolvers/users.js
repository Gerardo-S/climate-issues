const User = require("../../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserInputError } = require("apollo-server-express");
const { validateLoginInput } = require("../../util/validators");
const SECRET_KEY = process.env.SERVER_SECRET;

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
}
module.exports = {
  Mutation: {
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);
      const user = await User.findOne({ username });
      // check to see if user left field blank
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "Wrong Credentials";
        throw new UserInputError("Wrong Credentials", { errors });
      }

      const token = generateToken(user);
      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async register(_, { registerInput: { username, password } }) {
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("Username is taken", {
          error: {
            username: "This username is taken",
          },
        });
      }

      const newUser = new User({
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();
      const token = generateToken(res);
      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
