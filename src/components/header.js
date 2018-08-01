import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <a class="logo" href="/">Bloggy.</a>
        <a class="newPostButton" href="/posts/new">New Post</a>
      </header>
    )
  }
}
