import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

const query = gql`
query DetailView($_id: ID!) {
	taco(_id: $_id) {
	_id
    meat
    cheese
    salsa
		

	}
}
`



class DetailView extends Component {
  render() {
    return (
      <div className="App">
        
          <h3>Detail View</h3>
        
         
        
      </div>
    );
  }
}

export default DetailView;
