import React from 'react';

const UserForm = ({ onInputChange }) => {

  return (
    <div className="container">
      <h5>Rating Information</h5>
      <div className="row">
        <div className="input-field col s6">
          <input id="firstName" type="text" onChange={(e) => onInputChange(e, 'firstName')} />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="lastName" type="text" onChange={(e) => onInputChange(e, 'lastName')} />
          <label htmlFor="lastName">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="line_1" type="text" onChange={(e) => onInputChange(e, 'address')} />
          <label htmlFor="line_1">Address 1</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input placeholder="Optional" id="line_2" type="text" onChange={(e) => onInputChange(e, 'address')} />
          <label htmlFor="line_2">Address 2</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s4">
          <input id="city" type="text" onChange={(e) => onInputChange(e, 'address')} />
          <label htmlFor="city">City</label>
        </div>
        <div className="input-field col s4">
          <input id="region" type="text" onChange={(e) => onInputChange(e, 'address')} />
          <label htmlFor="region">Region</label>
        </div>
        <div className="input-field col s4">
          <input id="postal" type="text" onChange={(e) => onInputChange(e, 'address')} />
          <label htmlFor="postal">Postal Code</label>
        </div>
      </div>
    </div>
  );
}
 
export default UserForm;