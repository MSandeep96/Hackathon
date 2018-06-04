import React, { Component } from 'react';
import './App.css';
import TitleBar from './components/TitleBar';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillMount() {
    var auth = localStorage.getItem('auth');
    this.setState({
      isLoggedIn : auth !== null
    });

  }


  handleLogin(e){
    e.preventDefault();
    
  }
  

  render() {
    return (
      <div className="App">
        <TitleBar isLoggedIn={this.state.isLoggedIn}
          handleLogin={this.handleLogin}/>

      </div>
    );
  }
}

export default App;
