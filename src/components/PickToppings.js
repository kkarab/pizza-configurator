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
        <form action="#">
          <p>
            <h2>Pick your favorite toppings:</h2>
            <h3>(you may select up to 3 toppings!)</h3>
              <label>              
                <input name="group3" type="checkbox" class="filled-in" value="tomatoes" onChange={this.handleChange}/>
                <span>Cherry tomatoes (extra € 0,50 cost)</span>
              </label>
          </p>
          <p>
            <label>
              <input name="group3" type="checkbox" class="filled-in" value="olives" onChange={this.handleChange}/>
              <span>Green Olives (extra € 0,50 cost)</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group3" type="checkbox" class="filled-in" value="onions" onChange={this.handleChange}/>
              <span>Red onions (extra € 0,50 cost)</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group3" type="checkbox" class="filled-in" value="corn" onChange={this.handleChange}/>
              <span>Corn (extra € 0,50 cost)</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group3" type="checkbox" class="filled-in" value="spinach" onChange={this.handleChange}/>
              <span>Spinach (extra € 0,50 cost)</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group3" type="checkbox" class="filled-in" value="pineapple" onChange={this.handleChange}/>
              <span>Pineapple (extra € 0,50 cost)</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group3" type="checkbox" class="filled-in" value="chicken" onChange={this.handleChange}/>
              <span>Chicken (extra € 0,50 cost)</span>
            </label>
          </p>
        </form>    
      );
    }
  }
//<input type="checkbox" disabled={this.state.length >= 3} />
export default connect(null, {addTopping,removeTopping})(PickToppings)