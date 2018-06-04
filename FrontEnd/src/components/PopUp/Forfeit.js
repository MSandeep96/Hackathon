import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Forfeit extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open : false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose
  }

  handleOpen(){
    this.setState({ open: true });
  }

  handleClose(){
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Do you forfeit?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Forfeiting will let computer solve for you and you will not be given any score. To continue, click yes.
            </DialogContentText>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              No
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}