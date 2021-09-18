import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, remove }) => {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center", fontWeight: 500 }}>
        Posts not found :(
      </h1>
    );
  }
  return (
    <div className="post__list">
      <h1 style={{ textAlign: "center" }}>What is better to use?</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          if (post.description === "") {
            post.description = "There is no description yet";
          }
          return (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
              <PostItem
                remove={remove}
                number={++index}
                title={post.title}
                description={post.description}
                id={post.id}
                key={post.id}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
