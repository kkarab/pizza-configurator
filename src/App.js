import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PickBase from './components/PickBase.js';
import PickSauce from './components/PickSauce.js';
import PickToppings from './components/PickToppings.js';
import PickDelivery from './components/PickDelivery.js';
import OrderCost from './components/OrderCost.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to NewAgePizza.com</h1>
        </header>
        <p className="App-intro">
          To get started, choose your pizza base, your pizza sauce, your pizza toppings and type of delivery.
        </p>
        <p>The total cost of your pizza will be displayed below. If you choose delivery by drone, the total cost is increased by 10%.</p>
        <PickBase/>
        <PickSauce/>
        <PickToppings/>
        <PickDelivery/>
        <OrderCost/>
      </div>
    );
  }
}

export default App;
