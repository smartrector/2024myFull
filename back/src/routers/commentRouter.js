const {Router} = require("express");
const commentRouter = Router({mergeParams: true});

const {default: mongoose} = require("mongoose");
const {Blog} = require("../models/Blog");
const User = require("../models/User");
const {Comment} = require("../models/Comment");

commentRouter.post("/", async (req, res) => {
  try {
    const {blogId} = req.params;
    const {userId, content} = req.body;

    console.log(blogId);
    if (!mongoose.isValidObjectId(blogId))
      return res.status(400).send({message: "blogId is 없음"});
    if (!mongoose.isValidObjectId(userId))
      return res.status(400).send({message: "userId is 없음"});
    if (typeof content !== "string")
      return res.status(400).send({message: "내용이 없네~~~"});

    // const blog = await Blog.findById(blogId);
    // const user = await User.findById(userId);

    const [blog, user] = await Promise.all([
      Blog.findById(blogId),
      User.findById(userId),
    ]);

    const comment = await new Comment({content, blog, user}).save();
    return res.status(200).send({newComment: comment});
  } catch (error) {
    return res.status(400).send({error: error.message});
  }
});

commentRouter.get("/", async (req, res) => {
  try {
    const {blogId} = req.params;
    if (!mongoose.isValidObjectId(blogId))
      return res.status(400).send({message: "blogId is 없음"});
    const comment = await Comment.find({blog: blogId})
      .populate([{path: "user", select: "email name"}])
      .sort({createdAt: 1});
    return res.status(200).send({comment});
  } catch (error) {
    return res.status(400).send({error: error.message});
  }
});

commentRouter.delete("/:commentId", async (req, res) => {
  try {
    const {commentId} = req.params;
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment)
      return res.status(400).send({message: "commentId is 없음"});
    return res.status(200).send({message: "댓글이 성공적으로 삭제되었습니다."});
  } catch (error) {
    return res.status(400).send({error: error.message});
  }
});

// commentRouter.post("/",async(req,res)=>{
//     try {
//         return res.status(200).send({});
//     } catch (error) {
//         return res.status(400).send({error: error.message});
//     }
// })

module.exports = {commentRouter};
