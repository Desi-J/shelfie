import React, { Component } from 'react';
import logo from './logo.svg';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import Product from './component/Product/Product';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.setState = {
      image_Url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
      product_name: '',
      price: '',
      inventoryList: [
        {
          name: 'soda',
          price: 3,
          image_Url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'        },
        {
          name: 'pizza',
          price: 12,
          image_Url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
        }
      ]
    };
    this.handleImage = this.handleImage.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.cancelInput = this.cancelInput.bind(this);
    console.log('hello')
  }

  
  componentDidMount(){
  
  }
  handleImage(event){
    const {image_Url} = this.state
    console.log('image',image_Url)
    console.log('imageval',event.target.value)

    this.setState({ image_Url: event.target.value})
  }

  handleName(event){
    const {product_name} = this.state
    console.log('name',product_name)
    console.log('nameval',event.target.value)

    this.setState({product_name: event.target.value})
  }
  handlePrice(event){
    const {price} = this.state
    console.log('price',event.target.price)
    console.log('priceval',event.target.value)

    this.setState({price: event.target.value})
  }


  // handleChange = (e) => {
  //   console.log('name', e.target.name);
  //   console.log('value', e.target.value);
  //   this.setState({ [e.target.name]: e.target.value }); 
  //  }

  cancelInput(e) {
    let baseState = '';
    this.setState({[e.target.name]: ''})
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
        <button>Add to Inventory</button>

        <Dashboard/>
        <Form/>
        <Header/>
        <Product/>
      </div>
    );
  }
}

export default App;
