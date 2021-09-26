import axios from "axios";
import React, { useEffect, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./hooks/usePost";

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
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()
  }, [])
  //only when mounted;

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // eslint-disable-next-line no-unused-expressions
    return setPosts(response.data.map((post) => ({
      id: post.id,
      title: post.title,
      key: 'social',
      description: post.body
    })));
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
      <PostList posts={sortedAndSearchedPosts} remove={removePost} />
    </div>
  );
}

export default App;
