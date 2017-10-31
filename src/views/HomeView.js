import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { gql, graphql } from 'react-apollo';

const query = gql`{
allTacos {
      _id
      salsa
      meat
    }
}`

class HomeView extends Component {
  render() {
    let { data } = this.props
    if (data.loading) {
      return <div>Loading...</div>
    }
    return (
      <div className="App">
      <h3>D HomeView</h3>
      {data.allTacos.map((item, index) => (
        <p key={item._id}>
        <Link to={`/tacos/${item._id}/`}>
          {item._id}
          </Link>
          </p>
        ))}
        
         
        
      </div>
    );
  }
}

HomeView = graphql(query)(HomeView)
export default HomeView;
