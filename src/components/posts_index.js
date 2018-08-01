import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p class="categories">{post.categories}</p>
        </article>
      );
    });
  }

  render() {
    return (
      <section id="postsList">
        <h1>Posts index</h1>
        {this.renderPosts()}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
