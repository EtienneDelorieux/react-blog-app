import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";


class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="formGroup">
        <label>{field.label}</label>
        <input
          required
          type={field.type}
          {...field.input}
          className={field.meta.touched && field.meta.error ? "invalid" : ""}
        />
      <p className="formError">{field.meta.touched ? field.meta.error : ""}</p>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <section id="postsNew">
        <h1>Create a post</h1>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="newPostForm">
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
          <div className="formActions">
            <Link to="/" className="btn btn--secondary">
              <i className="fas fa-angle-left"></i>Cancel
            </Link>
            <button type="submit" className="btn btn--primary"><i className="fas fa-angle-right"></i>Submit post</button>
          </div>
        </form>
      </section>
    );
  }
}


function validate(values) {
  // console.log(values) -> {title: "abc", categories: "def", content: "ghijklmnop"}
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title"
  }

  if (!values.categories) {
    errors.categories = "Enter at least one category"
  }

  if (!values.content) {
    errors.content = "Enter a content"
  }

  // If errors is empty, the form is goot do go
  // If errors has any properties, redux-form assumes the form in invalid
  return errors;
}


export default reduxForm({
  validate,
  form: "NewPostForm"
})(PostsNew);
