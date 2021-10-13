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
            <Card>
                <Card.Title>Product</Card.Title>
                <Table>

                </Table>
            </Card>
            <Card>
                <Card.Title>Contract</Card.Title>
                <Table>

                </Table>
            </Card>
            <Card>
                <Card.Title>Message</Card.Title>
                <Table>
                    
                </Table>
            </Card>
        </div>
    );
  }
}

export default Dashboard;
