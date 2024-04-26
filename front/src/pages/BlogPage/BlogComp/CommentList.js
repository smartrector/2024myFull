import React from "react";
import {useSelector} from "react-redux";

function CommentList({comment, deleteComment}) {
  const userData = useSelector((state) => {
    return state.user?.userData;
  });
  const loggedInUserId = userData.user.id;
  const commentAuthorId = comment.user._id;

  const isCommentAuthor = loggedInUserId === commentAuthorId;

  const handlerDeleteComment = () => {
    deleteComment(comment._id);
  };
  return (
    <div>
      {comment.content} / {comment.user.name}
      {isCommentAuthor && (
        <button onClick={handlerDeleteComment}>[삭제]</button>
      )}
    </div>
  );
}

export default CommentList;
