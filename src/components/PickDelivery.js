import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseDelivery } from '../actions/types.js';
import store from '../store';

class PickDelivery extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      store.dispatch(chooseDelivery({value: event.target.value}))
    }
  
    render() {
      return (
        <form>
          <label>
            Pick the type of delivery for your pizza:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="normal">Standard Delivery (no extra cost)</option>
              <option value="drone">Turbo Drone Delivery (+10% order cost)</option>
            </select>
          </label>
        </form>
      );
    }
  }

export default connect(null, {chooseDelivery})(PickDelivery)