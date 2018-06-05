import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseBase } from '../actions/types.js';
import store from '../store';

class PickBase extends React.Component {
    constructor(props) {
      super(props);
      //this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);      
    }
  
    handleChange(event) {
      //this.setState({value: event.target.value});
      store.dispatch(chooseBase({value: event.target.value}))
    }
  
    render() {
      return (
        <form action="#">
          <h2>Pick your favorite base:</h2>
          <p>
            <label>              
              <input name="group1" type="radio" value="B20" onChange={this.handleChange}/>
              <span>20cm NY Style € 6,45 cost</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" value="B25" onChange={this.handleChange}/>
              <span>25cm NY Style € 8,99 cost</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" value="B30" onChange={this.handleChange}/>
              <span>30cm NY Style € 11,49 cost</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" value="B35" onChange={this.handleChange}/>
              <span>35cm NY Style € 13,49 cost</span>
            </label>
          </p>
        </form>
      );
    }
  }

export default connect(null, {chooseBase})(PickBase)