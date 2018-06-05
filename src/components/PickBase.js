import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PizzaBase.css';

class PizzaBase extends React.Component {
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
    //   alert('Your favorite pizza base is: ' + this.state.value);
    //   event.preventDefault();
    // }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite base for your pizza:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="20cm NY Style € 6,45">small base</option>
              <option value="25cm NY Style € 8,99">medium base</option>
              <option value="30cm NY Style € 11,49">large base</option>
              <option value="35cm NY Style € 13,49">X-large base</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default PizzaBase