const express = require("express");
const {default: mongoose} = require("mongoose");
const User = require("../models/User");
const {Blog} = require("../models/Blog");
const blogRouter = express.Router();

blogRouter.post("/", async (req, res) => {
  try {
    const {title, content, isLive, userId} = req.body;

    if (typeof title !== "string")
      res.status(400).send({err: "title is required"});
    if (typeof content !== "string")
      res.status(400).send({err: "content is required"});
    if (isLive && isLive !== "boolean")
      res.status(400).send({err: "isLive is required"});
    if (!mongoose.isValidObjectId(userId))
      res.status(400).send({err: "userId is required"});

    let user = await User.findById(userId);
    if (!user) res.status(400).send({err: "user does not"});

    // let blog = new Blog({...req.body,user})
    // await blog.save()

    let blog = await new Blog({...req.body, user}).save();

    return res.status(200).send({blog});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }
});

blogRouter.get("/", async (req, res) => {
  try {
    let {page} = req.query;
    page = parseInt(page);
    const totalCnt = await Blog.countDocuments({});
    const blogs = await Blog.find({})
      .skip(page * 5)
      .limit(5)
      .populate({
        path: "user",
        select: "email name",
      });
    return res.status(200).send({blogs, totalCnt});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }
});

blogRouter.get("/:blogId", async (req, res) => {
  try {
    const {blogId} = req.params;
    if (!mongoose.isValidObjectId(blogId))
      res.status(400).send({message: "not blogId"});

    const blog = await Blog.findOne({_id: blogId}).populate({
      path: "user",
      select: "email name",
    });

    return res.status(200).send({blog});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }
});

module.exports = {blogRouter};
