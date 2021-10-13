import logo from './mavennetlogo.svg';
import './App.css';
import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard } from './pages/Dashboard';

export default class App extends Component {
  constructor() {
    super();
    this.profiles ={
      "ADMIN": {name: "Admin", key: "a"},
      "DOM_CUSTOMER": {name: "Domestic Customer", key: "b" },
      "FOR_CUSTOMER": {name: "Foreign Customer", key: "c" },
    }
    this.state={
      currentLogin: null
    }
    this.updateLoginProfile = this.updateLoginProfile.bind(this)
  }
  updateLoginProfile(profile){
    this.setState({
      currentLogin: this.profiles[profile]
    })
    console.log(this.profiles[profile])
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Login</h2>
          <Button onClick={()=>this.updateLoginProfile("ADMIN")} variant="warning" className= "mb-3">Admin</Button>
          <Button onClick={()=>this.updateLoginProfile("DOM_CUSTOMER")} variant="info" className= "mb-3">Domestic Customer</Button>
          <Button onClick={()=>this.updateLoginProfile("FOR_CUSTOMER")} variant="info" className= "mb-3">Foreign Customer</Button>
          {this.state.currentLogin ? <Dashboard user={this.state.currentLogin}/> : <></>}
        </header>
      </div>
    );
  }
}

//export default App;
