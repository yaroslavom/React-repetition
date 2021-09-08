import React, { useState, useRef } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, key: "social", title: "Instagram", description: "Upload your photos here" },
    { id: 2, key: "social", title: "Facebook", description: "" },
    { id: 3, key: "social", title: "VKontakte", description: "" },
  ]);
  //двуxстороние связивание
  const [title, setTitle] = useState('jh');
  const [description, setDescription] = useState('');
  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault(); //избаляет от перересовки всего компонента;
    const newPost = {
      id: Date.now(),
      key: "social",
      title,
      description,
    }
    setPosts([...posts, newPost]);
    setTitle('');
    setDescription('');
    // console.log(bodyInputRef.current.value);
    //current(поточний елемент) - копирует элемент;
    //target - onchange сохраняет изминение в root и мы по таргету(цели) вибираем что хтотим
    //забрать с root;
  }

  return (
    <div className="App">
      <form>
        {/* Компонент через хуки называется контролируемым */}
        <MyInput value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Name of post"/>
        <MyInput value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Description of post"/>
        

        {/* Что-бы передать реф, в компоненте используется 'React.forwardRef';
        Такой компонент называется не контролируемый */}
        {/* <MyInput ref={bodyInputRef} value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Description of post"/> */}
        
        <MyButton type="submit" onClick={addNewPost}>Add post</MyButton>
      </form>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
