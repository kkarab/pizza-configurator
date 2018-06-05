import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseSauce } from '../actions/types.js';
import store from '../store';

class PickSauce extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      store.dispatch(chooseSauce({value: event.target.value}))
    }
  
    render() {
      return (
        <form>
          <label>
            Pick your favorite sauce for your pizza:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="White">White Sauce (no extra cost)</option>
              <option value="Red">Red Sauce (no extra cost)</option>
              <option value="2Xred">Double Red Sauce (extra € 1,00 cost)</option>
              <option value="Mix">Mix It Up (extra € 1,50 cost)</option>
            </select>
          </label>
        </form>
      );
    }
  }

export default connect(null, {chooseSauce})(PickSauce)
