import React from "react";
import CommentCreated from "../components/Comment/CommentCreated";
function Comment() {
  return (
    <div className="comment-container">
      {[1, 2, 4, 5, 6, 7].map((item) => (
        <CommentCreated key={item} />
      ))}
    </div>
  );
}

export default Comment;
