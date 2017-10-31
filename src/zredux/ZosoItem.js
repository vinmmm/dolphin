import React from 'react';

class ZosoItem extends React.Component {
	render() {
		return <dt style={{ 
			textDecoration: this.props.done ? 'line-through salmon' : 'none'
			//onClick handler to call the prop directly
		}}>{ this.props.name } <a href='#' onClick={this.props.onToggleDone}>{ this.props.done ? 'Mark as not done' : 'Mark as done' }</a></dt>;
	}
}

export default ZosoItem;