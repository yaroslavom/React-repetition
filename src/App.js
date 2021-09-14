import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      key: "social",
      title: "Instagram",
      description: "Upload your photos here",
    },
    { id: 2, key: "social", title: "Facebook", description: "" },
    { id: 3, key: "social", title: "VKontakte", description: "" },
  ]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post))
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} remove={removePost}/>
    </div>
  );
}

export default App;
