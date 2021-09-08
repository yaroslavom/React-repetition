import React from "react";
import "../styles/App.css"

function PostItem({ title, description, number }) {
  return (
    <div className="post__item">
      <div className="post__number">{number}</div>
      <div className="post__data">{title}</div>
      {description && <div className="post__data">{description}</div>}
      <div className="post__btn">
        <button>Delete</button>
      </div>
    </div>
  );
}

export default PostItem;
