import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import store from '../store';

const BaseCost = {
    "B20" : 6.45,
    "B25" : 8.99,
    "B30" : 11.49,
    "B35" : 13.49
}

const SauceCost = {
    "White" : Number(0),
    "Red" : Number(0),
    "2Xred" : 1.00,
    "Mix" : 1.50 
}

const ToppingCost = {
    "tomatoes" : 0.50,
    "onions" : 0.50,
    "olives" : 0.50,
    "corn" : 0.50,
    "spinach" : 0.50,
    "pineapple" : 0.50,
    "chicken" : 0.50
}

const DeliveryCost = {
    "drone" : 1.1,
    "normal" : 1
}

class OrderCost extends React.Component {
    constructor(props) {
      super(props);
    }
 
    render() {
      return (
          <h2> Total Order Cost: {this.props.totalCostProp}</h2>
      );
    }
}

function getTotalCost(state) {
    var totalCost;
    console.log(state)
    if (state.base === '') {
        return ''
    }
    totalCost = BaseCost[state.base]
    if (state.sauce !== '') {
        totalCost += SauceCost[state.sauce]
    }
    if (state.topping.length > 0) {
        totalCost += state.topping.map(tp => ToppingCost[tp]).reduce((total, element) => total + element, 0)
    }
    totalCost *= DeliveryCost[state.drone]

    return totalCost.toFixed(2)
}

function mapStateToProps(state, ownProps) {
    return {
        totalCostProp: getTotalCost(state)
    };
}
export default connect(mapStateToProps)(OrderCost);
