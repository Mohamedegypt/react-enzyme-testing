import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Productes';

class App extends Component {

  state = {
    products: [
      {id:1 , name: "mohamed 1", brand: 'mockebrand a'},
      {id:2 , name: "mohamed 2", brand: 'mockebrand b'},
      {id:3 , name: "mohamed 3", brand: 'mockebrand c'}, 
  ],
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Product products={this.state.products}/>
        </div>
      </div>
    );
  }
}

export default App;
