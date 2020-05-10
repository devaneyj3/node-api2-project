import React, { useState, useContext } from "react";
import axiosInstance from "../../Axios/axiosInstance";
import { blogContext } from "../../context/blogContext";
import { useHistory } from "react-router-dom";

const AddNewPost = () => {
  const [AddNewPost, setAddNewPost] = useState({
    title: "",
    contents: "",
  });

  const history = useHistory();

  const data = useContext(blogContext);

  const change = (e) => {
    setAddNewPost({ ...AddNewPost, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/", AddNewPost)
      .then((res) => {
        console.log(res.data);
        data.setBlogPost([...data.blogPosts, res.data]);
      })
      .catch((err) => console.log(err.errorMessage));
    setAddNewPost({ title: "", contents: "" });
    history.push("/Posts");
  };

  return (
    <section className="AddNewPost">
      <form onSubmit={submitForm}>
        <input
          text="text"
          name="title"
          onChange={change}
          value={AddNewPost.title}
          placeholder="Title"
        />
        <textarea
          name="contents"
          onChange={change}
          value={AddNewPost.contents}
          placeholder="Body"
        />
        <input type="submit" />
      </form>
    </section>
  );
};

export default AddNewPost;
