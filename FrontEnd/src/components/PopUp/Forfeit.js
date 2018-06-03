import React from { Component } 'react';

class Forfeit extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <button onClick={}>Yes</button>
          <button onClick={}>No</button>
        </div>
      </div>
    );
  }
}

module.exports = Forfeit;
