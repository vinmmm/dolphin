import React from 'react';
import Header from './Header';
import ZosoList from './ZosoList';


class ZReduxContainer extends React.Component {
	render() {
		return <div className="App">
		<Header />
		<ZosoList />
	
	
		</div>;
	}
}

export default ZReduxContainer;