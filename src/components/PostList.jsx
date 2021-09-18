import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, remove }) => {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center", fontWeight: 500 }}>
        Posts not found :(
      </h1>
    )
  }
  return (
    <div className="post__list">
      <h1 style={{ textAlign: "center" }}>What is better to use?</h1>
      {posts.map((post, index) => {
        if (post.description === "") {
          post.description = "There is no description yet";
        }
        return (
          <PostItem
            remove={remove}
            number={++index}
            title={post.title}
            description={post.description}
            id={post.id}
            key={post.id}
          />
        );
      })}
    </div>
  );
};

export default PostList;
