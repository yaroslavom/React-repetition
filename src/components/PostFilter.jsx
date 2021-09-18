import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({filter, setFilter}) {
  return (
    <div>
      <MyInput
        style={{ marginTop: "15px" }}
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue={"Sorting"}
        options={[
          { value: "title", name: "Sort by Name" },
          { value: "description", name: "Sort by Description" },
        ]}
      />
    </div>
  );
}

export default PostFilter;
