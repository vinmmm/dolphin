import React from 'react';


class Header extends React.Component {
	render() {
		return <div className="App">
		<h5>Hello {this.props.header}</h5>
		</div>;
	}
}

export default Header;