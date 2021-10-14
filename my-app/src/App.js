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
      "ADMIN": {name: "Admin", key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6IkFETUlOIn0.hR8qytQy9l75YMCW9k9wDYOVJk4qG-qyHC7jqX0I0Ig'},
      "DOM_CUSTOMER": {name: "Domestic Customer", key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6IkRPTUVTVElDIn0.OdCKqt8b3WpWe5mPt5GwdxapSilObJv9p_JyxZwW17w' },
      "FOR_CUSTOMER": {name: "Foreign Customer", key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6IkZPUkVJR04ifQ.iTlQm0tUOJ4Boz72mOtsu3MXOgu7BOtR2dOG6xGSy00' },
    }
    this.state={
      currentLogin: null,
      users: []
    }
    this.updateLoginProfile = this.updateLoginProfile.bind(this)
  }
  updateLoginProfile(profile){
    this.setState({
      currentLogin: this.profiles[profile]
    })
    console.log(this.profiles[profile])
  }

  componentDidMount(){
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "AJalp94dfG14ju70pLJhzD0Hzpp7oOZ5egTmTEC1");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "key": "val"
    });

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://7ktgzkl5ce.execute-api.us-east-1.amazonaws.com/prod/users", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({users: result});
        console.log(result);
      })
      .catch(error => console.log('error', error));
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
          {this.state.currentLogin ? <Dashboard user={this.state.currentLogin}/> : 
          <>
            <h2>Login</h2>
            <Button onClick={()=>this.updateLoginProfile("ADMIN")} variant="warning" className= "mb-3">Admin</Button>
            <Button onClick={()=>this.updateLoginProfile("DOM_CUSTOMER")} variant="info" className= "mb-3">Domestic Customer</Button>
            <Button onClick={()=>this.updateLoginProfile("FOR_CUSTOMER")} variant="info" className= "mb-3">Foreign Customer</Button>
          </>}
        </header>
      </div>
    );
  }
}

//export default App;