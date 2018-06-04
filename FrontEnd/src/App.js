import React, { Component } from 'react';
import './App.css';
import TitleBar from './components/TitleBar';
import Login from './components/PopUp/Login';
import Game from './components/Game/Game';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false,
      showLoginDialog: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.loginSuccess = this.loginSuccess.bind(this);
  }

  componentWillMount() {
    var auth = localStorage.getItem('auth');
    this.setState({
      isLoggedIn : auth !== null
    });

  }


  handleLogin(e){
    e.preventDefault();
    this.setState({
      showLoginDialog: true
    });
  }

  loginSuccess(){
    this.setState({
      isLoggedIn : true,
      showLoginDialog : false
    });
  }

  closeDialog = ()=>{
    this.setState({
      showLoginDialog: false
    })
  }
  

  render() {
    return (
      <div className="App">
        <TitleBar isLoggedIn={this.state.isLoggedIn}
          handleLogin={this.handleLogin}/>
        {this.state.showLoginDialog && <Login loginSuccess={this.loginSuccess} close={this.closeDialog}/>}
        <Game />
      </div>
    );
  }
}

export default App;
