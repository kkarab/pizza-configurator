import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseBase } from '../actions/types.js';
import store from '../store';
import './PickBase.css';

class PickBase extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);      
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      store.dispatch()
    }
  
    render() {
      return (
        <form>
          <label>
            Pick your favorite base for your pizza:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="B20">20cm NY Style € 6,45</option>
              <option value="B25">25cm NY Style € 8,99</option>
              <option value="B30">30cm NY Style € 11,49</option>
              <option value="B35">35cm NY Style € 13,49</option>
            </select>
          </label>
        </form>
      );
    }
  }

  export default connect(null, {chooseBase})(PickBase)