import '../App.css';
import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Dashboard extends Component {
	constructor(props) {
        super(props);
        this.state = { 
            user: this.props.user
        };
    }
  render() {
    return(
        <div className="Dashboard">
            
        </div>
    );
  }
}

export default Dashboard;
