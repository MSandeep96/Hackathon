import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
};

class TitleBar extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            15 Puzzle
          </Typography>
          {this.props.isLoggedIn?
            <Avatar>P</Avatar>
            :<Button color="inherit" onClick={this.props.handleLogin}> Login </Button>
          }
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(TitleBar);