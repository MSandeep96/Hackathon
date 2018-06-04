import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from './Box';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 400,
    width: 400,
    margin: 20,
    backgroundColor: 'grey',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, -1]]
    };
  }


  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        {
          this.state.board.map((val)=>{
            return val.map((value) => {
              return <Grid key={value} item>
                <Box num={value}/>
                </Grid>; 
            });
          })
        }
      </Grid>
    );
  }
}


export default withStyles(styles)(Board);
