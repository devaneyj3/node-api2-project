import React, { useContext } from "react";
import "./Posts";
import { blogContext } from "../../context/blogContext";
import Post from "../post/post";
import "./Posts.scss";
import { Alert } from "reactstrap";
const Posts = () => {
  const data = useContext(blogContext);
  return (
    <>
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
    </>
  );
};

export default Posts;
