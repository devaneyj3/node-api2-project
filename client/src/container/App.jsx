import React, { useState, useEffect, useContext } from "react";
import "./App.scss";
import Posts from "../components/posts/Posts";
import { Route, Redirect } from "react-router-dom";
import { blogContext } from "../context/blogContext";
import  axiosInstance from "../Axios/axiosInstance";
import Nav from "../components/Nav/Nav";
import Add_New_Post from "../components/Add_New_Post/Add_New_Post";

function App() {
  const [blogPosts, setBlogPost] = useState([]);
  useEffect( async () => {
      const getPostsPromise = await axiosInstance.get('/');
      setBlogPost(getPostsPromise.data)
  }, []);

  return (
    <blogContext.Provider value={{blogPosts, setBlogPost}}>
      <div className="container">
        <Nav/>
        <Route exact path="/Posts" component={Posts} />
        <Route path="/Add_New_Post" component={Add_New_Post} />
        <Redirect from="/" to="/Posts" />
      </div>
  </blogContext.Provider>
  );
}

export default App;
