const {mongoose, Types} = require("mongoose");

const CommentSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Types.ObjectId,
    required: true,
    ref: "user",
  },
  Blog: {
    type: Types.ObjectId,
    required: true,
    ref: "blog",
  },
});
const Comment = mongoose.model("comment", CommentSchema);
module.exports = {Comment};
