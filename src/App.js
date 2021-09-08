import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, key: "social", title: "Instagram", description: "Upload your photos here" },
    { id: 2, key: "social", title: "Facebook", description: "" },
    { id: 3, key: "social", title: "VKontakte", description: "" },
  ]);
  const [post, setPost] = useState({title: '', description: ''});

  const addNewPost = (e) => {
    e.preventDefault(); //избаляет от перересовки всего компонента;
    setPosts([...posts, {...post, id: Date.now(), key: "social",}]);
    setPost({title: '', description: ''})
  }

  return (
    <div className="App">
      <form>
        {/* Контролируемые компоненты */}
        <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value })} type="text" placeholder="Name of post"/>
        <MyInput value={post.description} onChange={e => setPost({...post, description: e.target.value })} type="text" placeholder="Description of post"/>
        <MyButton type="submit" onClick={addNewPost}>Add post</MyButton>
      </form>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
