import '../pages/Dashboard.css';
import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MessageCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card bg="info" className="mb-3" style={{maxWidth:'40%', left:'30%' , padding: '2%'}}>
                <h2>From: {this.props.users[this.props.message['from']]['name']}</h2>
                <h4>Date: {this.props.message['date'].substring(0, 9)} at {this.props.message['date'].substring(11, 19)}</h4>
                <p>Message: {this.props.message['message']}</p>
                <img class="center" style={{ marginLeft: 'auto', marginRight: 'auto', maxHeight: '40%', maxWidth: '40%' }} src={this.props.message['image']} />
                <p style={{ alignItems: 'center', fontSize: "12px"}}>Notification ID:{this.props.message['notification_id']}</p>
            </Card>
        );
    }
}

export default MessageCard;