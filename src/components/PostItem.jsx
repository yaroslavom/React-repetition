import React from "react";
import "../styles/App.css"
import MyButton from "./UI/button/MyButton";

function PostItem({ title, description, number, id, remove }) {
  return (
    <div className="post__item">
      <div className="post__number">{number}</div>
      <div className="post__data">{title}</div>
      {description && <div className="post__data">{description}</div>}
      <div className="post__btn">
        <MyButton onClick={() => remove(id)}>Delete</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
