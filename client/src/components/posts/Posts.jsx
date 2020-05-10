import React, { useContext } from "react";
import "./Posts";
import { blogContext } from "../../context/blogContext";
const Posts = () => {
  const data = useContext(blogContext);
  return (
    <section className="Posts">
      {data.blogPosts.length === 0 ? (
        <p>There are no blog posts</p>
      ) : (
        data.blogPosts.map((post) => {
          return (
            <div key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.contents}</p>
              <p>{post.created_at}</p>
              <p>{post.updated_at}</p>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Posts;
