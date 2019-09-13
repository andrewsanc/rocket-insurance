import React, { Component } from 'react';

class UserForm extends Component {
  render() { 
    return (
      <div className="container">
        <h4>Rating Information</h4>
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
      </div>
    );
  }
}
 
export default UserForm;