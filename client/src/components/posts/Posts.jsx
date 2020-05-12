import React, { useContext } from "react";
import "./Posts";
import { blogContext } from "../../context/blogContext";
import Post from "../post/post";
import "./Posts.scss";
import { Alert } from "reactstrap";
import moment from "moment";

const Posts = () => {
  const data = useContext(blogContext);
  return (
    <div className="Post-Container">
      <h3>Today is {moment().format("MMMM Do YYYY")}</h3>
      {data.message !== "" ? (
        <Alert color="danger">{data.message}</Alert>
      ) : null}
      <section className="Posts">
        {data.blogPosts.length === 0 ? (
          <Alert color="danger">There are no blog posts</Alert>
        ) : (
          data.blogPosts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                contents={post.contents}
                created_at={post.created_at}
                updated_at={post.updated_at}
                delete={() => data.Delete(post.id)}
              />
            );
          })
        )}
      </section>
    </div>
  );
};

export default Posts;
