import React, { useEffect, useState } from "react";
import PostService from "./API/Postservice";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./hooks/usePost";

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [postLoader, setPostLoader] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts()
  }, [])
  //only when mounted;

  async function fetchPosts() {
    setPostLoader(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setPostLoader(false);
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post));
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>Get posts</button>
      <PostFilter filter={filter} setFilter={setFilter} />
      <MyButton style={{ marginTop: 15 }} onClick={()=> setModal(true)} >
        Create new post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      {postLoader 
      ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div> 
      : <PostList posts={sortedAndSearchedPosts} remove={removePost} />}
    </div>
  );
}

export default App;
