const {default: mongoose} = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  isLive: {type: Boolean, required: true, defalut: false},
  user: {type: Types.ObjectId, required: true, ref: "user"},
});
const Blog = mongoose.model("blog", BlogSchema);

module.exports = {Blog};
