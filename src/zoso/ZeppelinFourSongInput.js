import React from 'react';

class ZeppelinFourSongInput extends React.Component {
	dealwitshitSubmit(event) {
		event.preventDefault();
		console.log(this.refs.input.value);
		this.props.onAddSong(this.refs.input.value);
		this.refs.input.value = '';
	}

	render() {
		return (
			<form onSubmit={this.dealwitshitSubmit.bind(this)}>
			<input type="text" ref="input" />
			<button>add zeppelin four song</button>
			</form>
			);
	}
}

export default ZeppelinFourSongInput;