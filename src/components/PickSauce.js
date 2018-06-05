import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseSauce } from '../actions/types.js';
import store from '../store';

class PickSauce extends React.Component {
    constructor(props) {
      super(props);
      //this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      //this.setState({value: event.target.value});
      store.dispatch(chooseSauce({value: event.target.value}))
    }
  
    render() {
      return (
        <form action="#">
          <p>
            <h2>Pick your favorite sauce for your pizza:</h2>
              <label>              
                <input name="group2" type="radio" value="White" onChange={this.handleChange}/>
                <span>White Sauce (no extra cost)</span>
              </label>
          </p>
          <p>
            <label>
              <input name="group2" type="radio" value="Red" onChange={this.handleChange}/>
              <span>Red Sauce (no extra cost)</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group2" type="radio" value="2Xred" onChange={this.handleChange}/>
              <span>Double Red Sauce (extra € 1,00 cost)</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group2" type="radio" value="Mix" onChange={this.handleChange}/>
              <span>Mix It Up (extra € 1,50 cost)</span>
            </label>
          </p>
        </form>
      );
    }
  }

export default connect(null, {chooseSauce})(PickSauce)
