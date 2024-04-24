import React, {useState} from "react";

function CommentWrite({onSubmit}) {
  const [commentText, setCommentText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(commentText);
    setCommentText("");
  }
  function handleInputChange(e) {
    setCommentText(e.target.value);
  }
  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          className="border p-2 w-[250px] mr-1 rounded-md"
          placeholder="댓글 작성 해주세요"
          value={commentText}
        />
        <button className="border p-2 bg-slate-400 text-white rounded-md">
          등록
        </button>
      </form>
    </div>
  );
}

export default CommentWrite;
