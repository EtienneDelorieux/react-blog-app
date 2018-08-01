import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <a className="logo" href="/">Bloggy.</a>
        <Link to="/posts/new" className="btn btn--primary newPostBtn">
          <i class="fas fa-feather-alt"></i>Write stuff
        </Link>
      </header>
    )
  }
}

// <a className="newPostButton" href="/posts/new">New Post<i class="fas fa-feather-alt"></i></a>
