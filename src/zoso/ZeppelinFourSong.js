import React from 'react';

class ZeppelinFourSong extends React.Component {
	render() {
		return <li style={{
			color: this.props.good ? 'green' : 'red'
		}}>{ this.props.songName }</li>;
	}
}

export default ZeppelinFourSong;