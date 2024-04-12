const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");
const {hash, compare} = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

userRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) {
      return res.status(400).send({error: "이메일을 확인해주세요"});
    }

    const isMatch = await compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(400).send({error: "비밀번호 확인해주세요"});
    }

    const payload = {
      userId: user._id.toHexString(),
      email: user.email,
      role: user.role,
    };

    const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.status(200).send({user, accessToken, message: "로그인성공"});
  } catch (error) {
    return res.status(500).send({message: "login fail"});
  }
});

module.exports = userRouter;
