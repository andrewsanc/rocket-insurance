import React, { Component } from 'react';

class QuoteOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { policyHolder, deductible, asteroidCollision } = this.props;
    return (
      <div className="container">
        <h5>Quote Overview for {policyHolder.first_name} {policyHolder.last_name}</h5>
        <div className="row">
          <div className="col s12 m6">
            <h6>{deductible.title}</h6>
            <p>{deductible.description}</p>
            {deductible.values.map((value, i) => {
              return (
                <p><label><input key={i} name="deductible" type="radio" /><span>${value}</span></label></p>
              )
            })}
          </div>
          <div className="col s12 m6">
            <h6>{asteroidCollision.title}</h6>
            <p>{asteroidCollision.description}</p>
            {asteroidCollision.values.map((value, i) => {
              return (
                <p><label><input key={i} name="collision" type="radio" /><span>${value}</span></label></p>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}
 
export default QuoteOverview;