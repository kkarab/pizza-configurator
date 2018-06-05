import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTopping, removeTopping } from '../actions/types.js';
import store from '../store';

class PickToppings extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      store.dispatch(addTopping({value: event.target.value}))
      store.dispatch(removeTopping({value: event.target.value}))
    }
  
    render() {
      return (
        <form>
          <label>
            Pick your favorite toppings for your pizza: (you can select up to 3 toppings)
            <select multiple={true} value={this.state.value} onChange={this.handleChange}>
              <option value="tomatoes">Cherry tomatoes (extra € 0,50)</option>
              <option value="olives">Green Olives (extra € 0,50)</option>
              <option value="onions">Red onions (extra € 0,50)</option>
              <option value="corn">Corn (extra € 0,50)</option>
              <option value="spinach">Spinach (extra € 0,50)</option>
              <option value="pineapple">Pineapple (extra € 0,50)</option>
              <option value="chicken">Chicken (extra € 0,50)</option>
            </select>
          </label>
        </form>
      );
    }
  }

export default connect(null, {addTopping,removeTopping})(PickToppings)