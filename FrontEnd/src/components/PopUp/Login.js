import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import {signin} from '../../actions/SignIn';

export default class Login extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      desc : "To login, please fill the following details.",
      isLoading : false
    };
    this.usernameChanged = this.usernameChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  usernameChanged(e){
    this.setState({
      username: e.target.value
    });
  }

  passwordChanged(e){
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e){
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    var user = {
      username : this.state.username,
      password : this.state.password
    };
    signin(user)
      .then(this.props.loginSuccess)
      .catch((err)=>{
        this.setState({
          desc : err,
          isLoading: false
        });
      })
  }

  render() {
    return (
      <div>
        <Dialog
          open={true}
          onClose={this.props.close}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.state.desc} 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Username"
              type="username"
              onChange={this.usernameChanged}
              fullWidth
            />

            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              onChange={this.passwordChanged}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.close} color="primary">
              Cancel
            </Button>
            {this.state.isLoading?
              <CircularProgress /> :
              <Button onClick={this.handleLogin} color="primary">
                Login
              </Button>
            }
          </DialogActions>
          
        </Dialog>
      </div>
    );
  }
}
