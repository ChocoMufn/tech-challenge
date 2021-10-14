import '../pages/Dashboard.css';
import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card bg="success" className="mb-3" style={{maxWidth:'40%', left:'30%', padding: '5%'}}>
                <h2>Product Type: {this.props.product['product_type']}</h2>
                <h5>Product ID: {this.props.product['product_id']}</h5>
                <h4>Creation Date: {this.props.product['created_at'].substring(0, 9)} at {this.props.product['created_at'].substring(11, 19)}</h4>
                <p style={{ fontSize: "12px" }}>Notification ID: {this.props.product['notification_id']}</p>
            </Card>
        );
    }
}

export default ProductCard;