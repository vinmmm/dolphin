import React from 'react';
import Header from './Header';
import ZosoList from './ZosoList';
import Footer from './Footer';
import Zeppelin from './Zeppelin';
import ZeppelinFour from './ZeppelinFour';

class ZosoContainer extends React.Component {
	render() {
		return <div className="App">
		<Header />
		<ZosoList />
		<Zeppelin />
		<ZeppelinFour />
		<Footer />
		</div>;
	}
}

export default ZosoContainer;