import React from 'react';
import Header from './Header';
import StateOne from './StateOne';
import Animations from './Animations';

//import { observable } from 'mobx';


class DolphinConsultingContainer extends React.Component {
	render() {
		return <div className="App">
		<Header header="dolphin consulting header" />
		<StateOne />
		<Animations />
		
		
		</div>;
	}
}

export default DolphinConsultingContainer;