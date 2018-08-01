import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostsNew extends Component {
  render() {
    return (
      <section id="postsNew">
        <h1>Create a post</h1>
        <Link to="/" className="btn btn--secondary">
          <i class="fas fa-angle-left"></i>Go back to home
          </Link>
      </section>
    );
  }
}

export default PostsNew;
