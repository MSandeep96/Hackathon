import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  paper: {
    height: 100,
    width: 100,
    textAlign: 'center'
  }
};

class Box extends Component {
  render() {
    const { classes } = this.props;
    if(this.props.num === -1)
      return null;
    return (
      <Paper className={classes.paper}>
        <Typography variant="headline" color="inherit">
          {this.props.num}
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(Box);