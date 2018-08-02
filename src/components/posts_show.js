import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router-dom";


class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
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
          <span className="categories">
            <p>{post.categories}</p>
          </span>
        </article>
        <div className="postActions">
          <Link to="/" className="btn btn--secondary">
            <i className="fas fa-angle-left"></i>Back to index
          </Link>
          <button
            className="btn btn--danger newPostBtn"
            onClick={this.onDeleteClick.bind(this)}
          >
            <i className="fas fa-trash-alt"></i>Delete
          </button>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
