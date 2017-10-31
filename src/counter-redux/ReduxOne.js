import React, { Component } from 'react';
import { incrementCount } from './actions';

export default class ReduxOne extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
		this.handleClick = this.handleClick.bind(this)
	}


handleClick() {
	/*
	this.setState({
		count: this.state.count + 1
	})
	*/
	let action = incrementCount()
	console.log(action)
}


	render() {
		return (
			<div>
			<p>Count: {this.state.count}</p>
			<button onClick={this.handleClick}>increment count button</button>
			</div>
			)
	}
}