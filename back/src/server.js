const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routers/userRouter");
const {blogRouter} = require("./routers/blogRouter");
const {getFeker} = require("../faker");

dotenv.config();
app.use(express.json());
app.use(cors());
const server = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongoDB connected");

    mongoose.set("debug", true);

    app.use("/user", userRouter);
    app.use("/blog", blogRouter);

    app.listen(4000, async function () {
      console.log("server on port 4000");
      // await getFeker(10, 2);
    });
  } catch (error) {
    console.log("연결이 안됐네요!!!!!");
  }
};
server();
