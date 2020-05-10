import React, { useState, useEffect } from "react";
import "./App.scss";
import Posts from "../components/posts/Posts";
import { Route, Redirect } from "react-router-dom";
import { blogContext } from "../context/blogContext";
import  axiosInstance from "../Axios/axiosInstance";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect( async () => {
      const getPostsPromise = await axiosInstance.get('/');
      setBlogPosts(getPostsPromise.data)
  }, []);

  return (
    <blogContext.Provider value={blogPosts}>
      <div className="container">
        <Route exact path="/posts" component={Posts} />
        <Redirect from="/" to="/posts" />
      </div>
  </blogContext.Provider>
  );
}

export default App;
