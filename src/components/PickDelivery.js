import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PickDelivery.css';

class PickDelivery extends React.Component {
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
    //   alert('Your delivery is: ' + this.state.value);
    //   event.preventDefault();
    // }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite sauce for your pizza:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Standard Delivery (no extra cost)">Standard Delivery</option>
              <option value="Turbo Drone Delivery (+10% cost)">Turbo Drone Delivery</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }