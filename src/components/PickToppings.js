import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTopping, removeTopping } from '../actions/types.js';
import store from '../store';

class PickToppings extends React.Component {
    constructor(props) {
      super(props);
      //this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      //this.setState({value: event.target.value});
      if (event.target.checked) {
        store.dispatch(addTopping({value: event.target.value}));
      }
      else {
        store.dispatch(removeTopping({value: event.target.value}));
      }
    }
  
    render() {
      return (
        <form action="#">
          <h2>Pick your favorite toppings:</h2>
          <h3>(you may select up to 3 toppings!)</h3>
          <p>
            <label>              
              <input name="group3" type="checkbox" class="filled-in" value="tomatoes" onChange={this.handleChange} />
              {/* disabled={this.state.length>=3 && this.state.filter(topping => topping==="tomatoes").length===0} */}
              <span>Cherry tomatoes (extra € 0,50 cost)</span>
            </label>
          </p>
          <p> 
            <label>
              <input name="group3" type="checkbox" class="filled-in" value="olives" onChange={this.handleChange}/>
              {/* disabled={this.state.length>=3 && this.state.filter(topping => topping==="olives").length===0}/> */}
              <span>Green Olives (extra € 0,50 cost)</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group3" type="checkbox" class="filled-in" value="onions" onChange={this.handleChange}/>
              {/* disabled={this.state.length>=3 && this.state.filter(topping => topping==="onions").length===0}/> */}
              <span>Red onions (extra € 0,50 cost)</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group3" type="checkbox" class="filled-in" value="corn" onChange={this.handleChange}/>
              {/* disabled={this.state.length>=3 && this.state.filter(topping => topping==="corn").length===0}/> */}
              <span>Corn (extra € 0,50 cost)</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group3" type="checkbox" class="filled-in" value="spinach" onChange={this.handleChange}/>
              {/* disabled={this.state.length>=3 && this.state.filter(topping => topping==="spinach").length===0}/> */}
              <span>Spinach (extra € 0,50 cost)</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group3" type="checkbox" class="filled-in" value="pineapple" onChange={this.handleChange}/>
              {/* disabled={this.state.length>=3 && this.state.filter(topping => topping==="pineapple").length===0}/> */}
              <span>Pineapple (extra € 0,50 cost)</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group3" type="checkbox" class="filled-in" value="chicken" onChange={this.handleChange}/>
              {/* disabled={this.state.length>=3 && this.state.filter(topping => topping==="chicken").length===0}/> */}
              <span>Chicken (extra € 0,50 cost)</span>
            </label>
          </p>
        </form>    
      );
    }
  }

export default connect(null, {addTopping,removeTopping})(PickToppings)