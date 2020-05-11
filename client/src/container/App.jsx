import React, { useState, useEffect } from "react";
import "./App.scss";
import Posts from "../components/posts/Posts";
import { Route, Redirect } from "react-router-dom";
import { blogContext } from "../context/blogContext";
import axiosInstance from "../Axios/axiosInstance";
import Nav from "../components/Nav/Nav";
import Add_New_Post from "../components/Add_New_Post/Add_New_Post";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [blogPosts, setBlogPost] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function fetchData() {
      const getPostsPromise = await axiosInstance.get("/");
      setBlogPost(getPostsPromise.data);
    }
    fetchData();
  }, []);

  const Delete = (id) => {
    axiosInstance.delete(`/${id}`).then((res) => {
      const filtered = blogPosts.filter((post) => post.id !== res.data);
      setBlogPost(filtered);
      setMessage(`Post with ID: ${res.data} has been deleted`);
    });
  };

  return (
    <blogContext.Provider value={{ blogPosts, setBlogPost, Delete, message }}>
      <div className="container">
        <Nav />
        <Route exact path="/Posts" component={Posts} />
        <Route path="/Add_New_Post" component={Add_New_Post} />
        <Redirect from="/" to="/Posts" />
      </div>
    </blogContext.Provider>
  );
};

export default App;
