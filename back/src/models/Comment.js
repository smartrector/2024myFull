const {mongoose, Types} = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Types.ObjectId,
      required: true,
      ref: "user",
    },
    blog: {
      type: Types.ObjectId,
      required: true,
      ref: "blog",
    },
  },
  {timestamps: true}
);
const Comment = mongoose.model("comment", CommentSchema);
module.exports = {Comment};
