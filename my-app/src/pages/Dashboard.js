import '../App.css';
import React, { Component } from "react";
import { Table, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrintingCards = (notifications) => {
    
    const makeCard = (card) => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    {/* <Card.Title>{card.notification_type}</Card.Title>
                    <Card.Title>{card.notification_id}</Card.Title> */}
                    <Card.Text>{card.map()}</Card.Text>
                    
                </Card.Body>
            </Card>
        );
    };

    return(
        <div>{notifications.map(makeCard)}</div>
    );
};
export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
    }

    render() {
        return (
            <div className="Dashboard">

            </div>
        );
    }
}

export default Dashboard;
