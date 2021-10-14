import '../App.css';
import './Dashboard.css';
import React, { Component } from "react";
import { Table, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContractCard from '../components/ContractCard';
import ProductCard from '../components/ProductCard';
import MessageCard from '../components/MessageCard';



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
    displayContracts(){
        this.setState({showContracts: !this.state.showContracts});
    }
    displayProducts(){
        this.setState({showProducts: !this.state.showProducts});
    }
    displayMessages(){
        let tempBool = this.showMessages;
        console.log(tempBool)
        this.setState({showMessages: !this.state.showMessages});
    }
    getDate(date){
        const formattedDate = new Date(date)
        return formattedDate
    }

    render() {
        return (
            <div className="Dashboard" style={{fontFamily: 'sans-serif'}}>
                {/* {PrintingCards(Test(this.state.key))} */}
                <div style={{padding: '10px', fontWeight: 'bold'}}>
                <Button onClick={()=>this.displayContracts()} variant="danger" className= "mb-3" >Contracts</Button>
                <Button onClick={()=>this.displayProducts()} variant="success" className= "mb-3">Products</Button>
                <Button onClick={()=>this.displayMessages()} variant="info" className= "mb-3">Messages</Button>
                </div>

                {this.state.showContracts ? this.state.newContract.map(contract =>{
                   return( 
                       <ContractCard users={this.props.users} contract={contract}/>
                   )
                }) : <></>}
                {this.state.showProducts ? this.state.newProduct.map(product =>{
                   return( 
                       <ProductCard product={product}/>
                   )
                }) : <></>}
                {this.state.showMessages ? this.state.newMessages.map(message =>{
                   return( 
                        <MessageCard users={this.props.users} message={message}/>
                   )
                }) : <></>}

            </div>
        );
    }

}

export default Dashboard;