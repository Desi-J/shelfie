import React, { Component } from 'react';
import logo from './logo.svg';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import Product from './component/Product/Product';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
        <Form/>
        <Header/>
        <Product/>
      </div>
    );
  }
}

export default App;
