import React from 'react'
import Star from './Star';
import StarRating from './StarRating';




class Animation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      animate: false, isToggleOn: true

       
    };
  }

  handleClick() {
  	requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({ animate: true });
      });
    });
   
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

 

  render() {

    return (
    	<div>
      <div style={ {
          background: '#eee',
          border: '1px solid black',
          width: this.state.animate ? 1250 : 50,
          margin: 20,
          padding: 20,
          transition: 'all 9s',
        } }
      >
      Animate my height.  <a href='#'>anchor link</a>.
      </div>

  <button onClick={this.handleClick = this.handleClick.bind(this)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>  

<Star />
<StarRating />
</div>
    );
  }
}



export default Animation;

