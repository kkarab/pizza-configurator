import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PickSauce.css';

class PickSauce extends React.Component {
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
    //   alert('Your favorite pizza sauce is: ' + this.state.value);
    //   event.preventDefault();
    // }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite sauce for your pizza:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="White sauce">White sauce</option>
              <option value="Red sauce">Red sauce</option>
              <option value="Double red sauce € 1,00">Double red sauce</option>
              <option value="Mix it up € 1,50">Mix it up</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }