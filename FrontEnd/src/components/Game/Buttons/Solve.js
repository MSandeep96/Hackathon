import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Solve  extends Component {
  render() {
    return (
      <div marginTop="80">
        <Button variant="outlined" onClick={this.props.solve}>
          Solve
        </Button>
      </div>
    );
  }
}