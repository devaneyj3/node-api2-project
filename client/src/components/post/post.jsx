import React from "react";
import "./post";
import "./post.scss";
import { Button } from "reactstrap";
const Post = (props) => {
  return (
    <section className="Post-Card">
      <h2>{props.title}</h2>
      <p>{props.contents}</p>
      <p>{props.created_at}</p>
      <p>{props.updated_at}</p>
      <Button onClick={props.delete} color="danger">
        Delete
      </Button>
      <Button color="primary">Edit</Button>
    </section>
  );
};

export default Post;
