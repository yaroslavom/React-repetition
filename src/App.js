import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";

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

  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post));
  };

  const sortedPosts = useMemo(() => {
    console.log("work");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    console.log(filter.query);
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <PostFilter filter={filter} setFilter={setFilter} />
      <MyButton onClick={()=> setModal(true)} >
        Create new post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostList posts={sortedAndSearchedPosts} remove={removePost} />
    </div>
  );
}

export default App;
