import React from 'react';
import ZosoItem from './ZosoItem';
import ZosoInput from './ZosoInput';

class ZosoList extends React.Component {
	constructor() {
		super();

		this.state = {
			items: []
		};
	}
//Now to notify the parent ZosoList component that weve added an item so it can be added to its list
//...we achive this in a similar way in which we added an event handle to our form only now we call a function that is passed in as a prop rather
//...than a method of our class
handleAddItem(name) {
	console.log("ZosoList handleAddItem", name);
	const newItems = this.state.items.concat({ name: name, done: false });
	this.setState({ items: newItems});
}	

handleToggleDone(item) {
	console.log(item);
	const newItems = this.state.items.slice();
	newItems[newItems.indexOf(item)].done = !item.done;

	this.setState({ items: newItems });
}
	
	render() {
		
		
		return ( 
		
		<div>
		<dl>
	{/*Added the onToggleDone prop to each new item by making it call the method this.handleToggleDone with the current item as its parameter...
	 We can do this by putting .bind on the toggleDone method with the first parameter as this and the second as item to represent the current item*/}
		{ this.state.items.map(item => <ZosoItem name={item.name} done={item.done} onToggleDone={this.handleToggleDone.bind(this, item)} />) }
		</dl>
	{/*Here were passing reference to the hadnleAddItem meyhod to the ZosoInput component as a prop called onAddItem. This demonstates how any javascript type can be passed as a prop, even a function*/}
		<ZosoInput onAddItem={this.handleAddItem.bind(this)} />
		</div>
		
		);
	}
}

export default ZosoList;