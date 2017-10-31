import React from 'react';

const Zeppelin = ({ name='Hansa', flights, years }) => {
	return <div>
	<h1>{name}</h1>
	<p>{flights} Flights | {years} Years</p>
	</div>
}

Zeppelin.propTypes = {
	flights: React.PropTypes.number.isRequired,
	years: React.PropTypes.number.isRequired
}

Zeppelin.defaultProps = {
	flights: 1,
	years: 2
}

export default Zeppelin;