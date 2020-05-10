import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <section className="Nav">
      <nav>
        <NavLink to="/Posts">Posts</NavLink>
        <NavLink to="/Add_New_Post">Add New Post</NavLink>
      </nav>
    </section>
  );
};

export default Nav;
