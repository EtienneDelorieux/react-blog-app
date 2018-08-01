import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="formGroup">
        <label>{field.label}</label>
        <input
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <section id="postsNew">
        <h1>Create a post</h1>
        <form className="newPostForm">
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Content"
            name="content"
            type="textarea"
            component={this.renderField}
          />
        </form>
        <Link to="/" className="btn btn--secondary">
          <i className="fas fa-angle-left"></i>Go back to home
        </Link>
      </section>
    );
  }
}

export default reduxForm({
  form: "NewPostForm"
})(PostsNew);
