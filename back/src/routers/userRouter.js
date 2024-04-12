const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");
const {hash} = require("bcryptjs");

userRouter.post("/register", async (req, res) => {
  try {
    const password = await hash(req.body.password, 10);
    const user = await new User({
      name: req.body.name,
      email: req.body.email,
      password,
      createdAt: new Date(),
    }).save();
    return res.status(200).send({user});
  } catch (error) {}
});

module.exports = userRouter;
