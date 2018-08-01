import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>Posts index</div>
      {console.log(this.props.posts)};
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(null, { fetchPosts })(PostsIndex);
