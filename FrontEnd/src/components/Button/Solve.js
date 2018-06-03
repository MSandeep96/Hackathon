import React, { Component} from 'react';
import Forfeit from '/Forfeit';

class Solve extents Component {

	constructor() {
		super();
    	this.state = {
      		showPopup: false
    	};
	}

	togglePopup() {
    	this.setState({
      		showPopup: !this.state.showPopup
    	});
  	}

  	render() {
    	return (
      		<div className='buttonSolve'>
        		<button onClick={this.togglePopup.bind(this)}>Solve</button>
        		{this.state.showPopup ? 
          			<Forfeit
            			text='Do you forfeit?'
            			closePopup={this.togglePopup.bind(this)}
          			/>
          			: null
        		}
      		</div>
    	);
  	}

}