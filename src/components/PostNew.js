import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	// helper method
	// give access to field object from redux-form
	renderField(field) {
		// destructure touched and error from meta from field
		const { meta: { touched, error} } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
		
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>		
		)
	}

	onSubmit(values) { 
		console.log(values);
	}

	render() {
		// handleSubmit comes from redux-form
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}

// error handling for redux-form
function validate(values){
	const errors = {};

	if (!values.title) {
		errors.title = "Please enter a title.";
	}
	if (!values.categories) {
		errors.categories = "Please enter some categories";
	}
	if (!values.content) {
		errors.content = "Please enter some content.";
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);