import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";

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
  const [selectSort, setSelectedSort ] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post));
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort(( a, b ) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <MySelect value={selectSort} onChange={sortPosts} defaultValue={"Sorting"} options={[{value: 'title', name: 'Sort by Name'}, {value: 'description', name: 'Sort by Description'}]}/>
      {posts.length ? (
        <PostList posts={posts} remove={removePost} />
      ) : (
        <h1 style={{ textAlign: "center", fontWeight: 500 }}>
          Posts are missing
        </h1>
      )}
    </div>
  );
}

export default App;
