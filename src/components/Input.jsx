import React, { useState } from "react";

function PostItem() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h4>{value}</h4>
      <input placeholder={'Enter text'} value={value} onChange={(e) => setValue(e.target.value)}></input>
    </div>
  );
}

export default PostItem;
//target - like as a Dom element;
