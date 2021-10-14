import '../pages/Dashboard.css';
import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ContractCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card bg="danger" className="mb-3" style={{maxWidth:'40%', left:'30%', padding: '2%'}}>
                <h2>Sender: {this.props.users[this.props.contract['sender']]['name']}</h2>
                <h2>Receiver: {this.props.users[this.props.contract['receiver']]['name']}</h2>
                <h4>Expiration Date: {this.props.contract['expiration_date'].substring(0, 9)} at {this.props.contract['expiration_date'].substring(11, 19)}</h4>
                <p style={{ fontSize: "12px"}}>Notification ID: {this.props.contract['notification_id']}</p>
            </Card>
        );
    }
}

export default ContractCard;