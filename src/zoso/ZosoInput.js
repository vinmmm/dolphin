import React from 'react';

class ZosoInput extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
		//getting the value of the input
		//finally we make the handleSubmit method call this function with the value of the input
		//we can do this just by calling the function directly from this.props, passing the value as its argument
		this.props.onAddItem(this.refs.input.value);
		//setting the value of the input
		this.refs.input.value = '';
	}

	render() {
		return(
//Binding the handleSubmit event handler which is a function to be called when this form is submitted
//In an es6 class component event handlers usually take the form of an instance method followed by .bind(this)...
///... which insures the method has the right scope for accessing the component.
			<form onSubmit={this.handleSubmit.bind(this)}>
{/* using a refernce or a prop called ref to the inputs DOM node to get and set the value of the text box */}
			<input type="text" ref="input" />
			<button>Add</button>
			</form>
			);
	}
}

export default ZosoInput;