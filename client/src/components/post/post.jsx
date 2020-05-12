import React from "react";
import "./post";
import "./post.scss";
import { useHistory } from 'react-router-dom';
import { Button } from "reactstrap";
const Post = (props) => {
  let history = useHistory();
  const edit = (id, title, contents) => {
    history.push(`/edit/${id}?title=${title}&contents=${contents}`)
  }
  return (
    <section className="Post-Card">
      <h2>{props.title}</h2>
      <p>{props.contents}</p>
      <p>{props.created_at}</p>
      <p>{props.updated_at}</p>
      <Button onClick={props.delete} color="danger">
        Delete
      </Button>
      <Button onClick={() => edit(props.id, props.title, props.contents)} color="primary">Edit</Button>
    </section>
  );
};

export default Post;
