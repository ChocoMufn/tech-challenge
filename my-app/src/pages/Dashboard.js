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

    return (
        <div>{notifications.map(makeCard)}</div>
    );
};

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            data: null,
            newMessages: [],
            newProduct: [],
            newContract: [],
            showMessages: true,
            showContracts: true,
            showProducts: true,
        };
    }

    componentDidMount(){
            // GET request using fetch with set headers
            var myHeaders = new Headers();
            myHeaders.append("x-api-key", "AJalp94dfG14ju70pLJhzD0Hzpp7oOZ5egTmTEC1");
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Access-Control-Request-Headers", "*");
            myHeaders.append("Authorization", "Bearer " + this.state.user['key']);
            

            var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              mode: 'cors',
            };
            
            fetch("https://7ktgzkl5ce.execute-api.us-east-1.amazonaws.com/prod/notifications", requestOptions)
              .then(response =>{
                  console.log(response)
                  return response.json()})
              .then(result => {
                  result.forEach(data => {
                      if(data["notification_type"] === "NEW_MESSAGE"){
                        let newMessagesTemp = this.state.newMessages;
                        newMessagesTemp.push(data);
                        this.setState({newMessages: newMessagesTemp});
                      }
                      else if(data["notification_type"] === "NEW_PRODUCT"){
                        let newProductTemp = this.state.newProduct;
                        newProductTemp.push(data);
                        this.setState({newProduct: newProductTemp});
                      }
                      else if(data["notification_type"] === "NEW_CONTRACT"){
                        let newContractTemp = this.state.newContract;
                        newContractTemp.push(data);
                        this.setState({newContract: newContractTemp});
                      }
                  });
                  this.setState({data: result});
                  console.log(result)
              })
              .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div className="Dashboard">
                {/* {PrintingCards(Test(this.state.key))} */}

                {this.state.showContracts ? this.state.newContract.map(contract =>{
                   return( 
                   <Card>
                        <p style={{color: "black"}}>{contract['notification_id']}</p>
                    </Card>)
                }) : <></>}

            </div>
        );
    }

}

export default Dashboard;