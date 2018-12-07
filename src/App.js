import React, { Component } from 'react';
import logo from './logo.svg';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import Product from './component/Product/Product';
import './App.css';
import axios from 'axios';
import { read } from 'fs';

class App extends Component {
  constructor(){
    super();

    this.state = {
      image_Url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
      product_name: '',
      price: '',
      inventoryList: [
        {
          name: 'soda',
          price: 3,
          image_Url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',  
          id:1      },
        {
          name: 'pizza',
          price: 12,
          image_Url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
          id:2
        }
      ]
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.cancelInput = this.cancelInput.bind(this);
    this.addToInventory = this.addToInventory.bind(this);
    
  }


  componentDidMount(){
    
    this.cancelInput();
  }
  
  
  //AXIOS CALLS
  readInventory() {
   axios.get(`/api/inventory`).then((response) => {
     this.setState({ itemList: response.data})
   }).catch(error => {
   console.log('read error frontend:', error)
   })};

createNewItem(addedItem,id) {
  axios.put(`/api/inventory/${id}`, addedItem).then((response) => {
    this.setState({itemList: response.data})
  }).catch(error => {
  console.log('create error frontend:', error)
  })
}

updateInventoryF(addedItem, id){
  axios.put(`/api/inventory/${id}`, addedItem).then((response) => {
    this.setState({itemList: response.data})
  }).catch(error => {
 console.log('update error frontend:', error)
  })
}

deleteItemF(id) {
  const erasedItem = {
    image_Url: this.state.image_Url,
    name: this.state.name,
    price: this.state.price
  }
  axios.delete(`/api/inventory/${id}`, erasedItem).then((response) => {
    this.setState({itemList: response.data})
  }).catch(error => {
 console.log('delete error frontend:', error)
  })
}

//FUNCTIONS
  handleChange(e) {
    console.log('name', e.target.name);
    console.log('value', e.target.value);
    this.setState({ [e.target.name]: e.target.value }); 
   }

  cancelInput() {
    const {image_Url,name,price} = this.state 
    let baseState = '';
    this.setState({
      image_Url: baseState,
      name: baseState,
      price: 0
    })
  }

  addToInventory() {
    const addedItem = {
      image_Url: this.state.image_Url,
      name: this.state.name,
      price: this.state.price
    }
    this.updateInventoryF(addedItem);
  }


  render() {
    return (
      <div className="App">

        <label>Image</label>
        <input type="image_Url" name="image_Url" onChange={this.handleChange}/>
        <label>Name</label>
        <input type="product_name" name="product_name" onChange={this.handleChange}/>
        <label>Price</label>
        <input type="price" name="price" onChange={this.handleChange}/>

        <button type="cancel" onClick={this.resetInput}>Cancel</button>
        <button type="add" onClick={this.addToInventory}>Add to Inventory</button>

        <Dashboard/>
        <Form/>
        <Header/>
        <Product/>
      </div>
    );
  }
}

export default App;
