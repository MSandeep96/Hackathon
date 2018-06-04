import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Shuffle extends Component {
  render() {
    return (
      <div>
        <Button variant="outlined" onClick={this.props.newGame}>
          Shuffle
        </Button>
      </div>
    );
  }
}

export default Shuffle;