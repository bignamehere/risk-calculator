//
//
import React, { Component } from 'react';

class PaymentsTotal extends Component {
  render() {
    return (
      <div className="fry-box fry-box-condensed fry-box__title-bold">
        <div className="fry-box__content--lg fry-box__centered">${this.props.value}</div>
        <div className="fry-box__content--m fry-box__centered">{this.props.label}</div> 
      </div>
    );
  }
}

export default PaymentsTotal;