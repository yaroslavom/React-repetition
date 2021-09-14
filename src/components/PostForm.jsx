import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm({create}) {
    const [post, setPost] = useState({ title: "", description: "" });

    const addNewPost = (e) => {
      e.preventDefault(); //избаляет от перересовки всего компонента;
      const newPost = { ...post, id: Date.now(), key: "social" };
      create(newPost)
      setPost({ title: "", description: "" });
    };
  return (
    <form>
      {/* Контролируемые компоненты */}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Name of post"
      />
      <MyInput
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
        type="text"
        placeholder="Description of post"
      />
      <MyButton type="submit" onClick={addNewPost}>
        Add post
      </MyButton>
    </form>
  );
}

export default PostForm;
