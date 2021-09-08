import React from "react";
import PostItem from "./PostItem";

function PostList({ posts }) {
  return (
    <div className="post__list">
      <h1 style={{ textAlign: "center" }}>What is better to use?</h1>
      {posts.map((post, index) => {
        if(post.description === "") {
          post.description = "There is no description yet"
        }
        return (
          <PostItem
            number={++index}
            title={post.title}
            description={post.description}
            key={post.id}
          />
        )
      })}
    </div>
  );
}

export default PostList;
