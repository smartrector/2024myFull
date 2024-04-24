import React, {useState} from "react";

function CommentWrite() {
  const [commentText, setCommentText] = useState("");
  function handleSubmit() {}
  function handleInputChange() {}
  return (
    <div>
      <form onChange={handleSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          className="border p-2 w-[250px] mr-1 rounded-md"
          placeholder="댓글 작성 해주세요"
        />
        <button
          type="submit"
          className="border p-2 bg-slate-400 text-white rounded-md"
        >
          등록
        </button>
      </form>
    </div>
  );
}

export default CommentWrite;
