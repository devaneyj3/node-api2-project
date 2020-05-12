import React, { useState } from "react";

const Edit_Post = (props) => {
  const [Edit_Post, setEdit_Post] = useState({
    title: "",
    contents: "",
  });

  //get post search params
  const postInfo = props.location.search;
  console.log(postInfo)

  const change = (e) => {
    setEdit_Post({...Edit_Post, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(Edit_Post.title, Edit_Post.contents);
    setEdit_Post({title: "", contents: "" });
  };

  return (
    <section className="Edit_Post">
      <form onSubmit={submitForm}>
        <input
          text="text"
          name="title"
          onChange={change}
          value={Edit_Post.title}
          placeholder='Title'
        />
        <textarea name="contents" onChange={change} value={Edit_Post.contents} placeholder='Body' />
        <input type="submit" />
      </form>
    </section>
  );
};

export default Edit_Post;
