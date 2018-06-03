import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PickToppings.css';

class PickToppings extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    // handleSubmit(event) {
    //   alert('Your favorite pizza toppings are: ' + this.state.value);
    //   event.preventDefault();
    // }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite toppings for your pizza: (you can select up to 3 toppings)
            <select multiple={true} value={this.state.value} onChange={this.handleChange}>
              <option value="Pineapple €0,50">Pineapple</option>
              <option value="Corn €0,50">Corn</option>
              <option value="Olives (green) €0,50">Olives (green)</option>
              <option value="Red union €0,50">Red union</option>
              <option value="Spinach €0,50">Spinach</option>
              <option value="Cherry tomatoes €0,50">Cherry tomatoes</option>
              <option value="Chicken €0,50">Chicken</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }