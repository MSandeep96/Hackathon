import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  paper: {
    height: 100,
    width: 100,
    textAlign: 'center',
    msUserSelect: 'none',
  },
  paperBlank : {
    height: 100,
    width: 100,
    opacity: 0
  },
  center: {
    boxSizing: 'border-box',
    paddingTop: 30
  }
};

class Box extends Component {
  render() {
    const { classes } = this.props;
    if(this.props.num === -1)
      return (<Paper className={classes.paper}/>);
    return (
      <Paper className={classes.paper}>
        <Typography className={classes.center} variant="headline" color="inherit">
          {this.props.num}
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(Box);