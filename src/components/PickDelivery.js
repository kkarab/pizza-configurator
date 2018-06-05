import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseDelivery } from '../actions/types.js';
import store from '../store';

class PickDelivery extends React.Component {
    constructor(props) {
      super(props);
      //this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      //this.setState({value: event.target.value});
      store.dispatch(chooseDelivery({value: event.target.value}))
    }
  
    render() {
      return (
        <form action="#">
          <p>
            <h2>Pick the type of delivery for your pizza:</h2>
              <label>              
                <input name="group4" type="radio" value="normal" onChange={this.handleChange}/>
                <span>Standard Delivery (no extra cost)</span>
              </label>
          </p>
          <p>
            <label>
              <input name="group4" type="radio" value="drone" onChange={this.handleChange}/>
              <span>Turbo Drone Delivery (+10% order cost)</span>
            </label>
          </p>
        </form>          
      );
    }
  }

export default connect(null, {chooseDelivery})(PickDelivery)