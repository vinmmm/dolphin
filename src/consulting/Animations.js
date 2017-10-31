import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Animations extends React.Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
		this.state = {click:0, labels: []};
	}


	onClick(e){
		console.log('ani button');
		let labels = this.state.labels.concat([this.state.click]);
		this.setState({click:this.state.click+1, labels:labels});
	}
	
	render() {
		//let buttons = this.state.labels.map((value, i)=>{
		//	return <Button key={value}>{value}</Button>;
		//});

		return <div className="App">
		<h6>Animations</h6>
		<ReactCSSTransitionGroup transitionName='ani' transitionAppear={true} transitionAppearTimeout={500}
		transitionEnterTimeout={500} transitionLeaveTimeout={500}>

		</ReactCSSTransitionGroup>
		<button onClick={this.onClick} label="ani" > </button>
	{/* {buttons} */}
		</div>;
	}
}

export default Animations;