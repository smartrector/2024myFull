import React from "react";

function CommentList({comment}) {
  return (
    <div>
      {comment.content} / {comment.user.name}
      <button>삭제</button>
    </div>
  );
}

export default CommentList;
