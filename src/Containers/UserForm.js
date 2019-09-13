import React, { Component } from 'react';

class UserForm extends Component {
  render() { 
    return (
      <div className="container">
        <h5>Rating Information</h5>
        <div className="row">
          <div className="input-field col s6">
            <input id="firstName" type="text" />
            <label for="firstName" >First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="lastName" type="text" />
            <label for="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="line_1" type="text" />
            <label for="line_1">Address 1</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Optional" id="line_2" type="text" />
            <label for="line_2">Address 2</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s4">
            <input id="city" type="text" />
            <label for="city">City</label>
          </div>
          <div className="input-field col s4">
            <input id="region" type="text" />
            <label for="region">Region</label>
          </div>
          <div className="input-field col s4">
            <input id="postal" type="text" />
            <label for="postal">Postal Code</label>
          </div>
        </div>
      </div>
    );
  }
}
 
export default UserForm;