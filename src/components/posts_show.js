import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
import { Link } from "react-router-dom";


class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <p>Your post is loading...</p>
    }

    return (
      <section className="postWrapper">
        <article className="postShow">
          <h1 className="postTitle">{post.title}</h1>
          <p>{post.content}</p>
          <p class="categories">{post.categories}</p>
        </article>
        <Link to="/" className="btn btn--secondary">
          <i className="fas fa-angle-left"></i>Back to index
        </Link>
      </section>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
