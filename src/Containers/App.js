import React, { Component } from 'react';
import Nav from '../Components/Nav';
import UserForm from '../Components/UserForm';
import QuoteOverview from './QuoteOverview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      line_1: '',
      line_2: null,
      city: '',
      region: '',
      postal: '',
      data: false,
      responseQuote: null
    }
  }

  onResetButtonClick = () => {
    this.setState({ data: false })
  }
  
  onInputChange = (e, key) => { // Handles the input change from our form
    this.setState({ [key]: e.target.value })
  }

  onButtonClick = () => { // Makes request to backend server
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';  // Had to proxy the request dur CORS backend
    const url = 'https://fed-challenge.sure.now.sh/api/v1/quotes';
    fetch(proxyurl + url, {
      method: 'post',
      headers: {
        'Content': 'application/json',
      },
      body: JSON.stringify({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        address: {
          line_1: this.state.line_1,
          line_2: this.state.line_2,
          city: this.state.city,
          region: this.state.region,
          postal: this.state.postal
        }
      })
    })
      .then(response => response.json())
      .then(response => this.setState({ data: true, responseQuote: response.quote }))
      .catch(error => console.log(error))
  }

  validateForm = () => {  // Controller function to handle form validation
    const { line_1, city, region, postal } = this.state;
    if (this.validateAddress(line_1) && this.validateCity(city) && this.validateRegion(region) && this.validatePostal(postal)) {
      return true;
    }
    return false;
  }

  validateAddress = (address) => address.trim().length > 2;
  validateCity = (city) => city.trim().length > 2;
  validateRegion = (region) => region.trim().length >= 2;
  validatePostal = (postal) => postal.trim().length >= 5;

  
  render() {
    const enableSubmit = this.validateForm();
    
    return (
      <React.Fragment>
        <Nav />
        {
         this.state.data ? // Ternary statement that renders depending on if the user has completed the form and submitted it
          <QuoteOverview 
            policyHolder={this.state.responseQuote.policy_holder} 
            deductible={this.state.responseQuote.variable_options.deductible}
            asteroidCollision={this.state.responseQuote.variable_options.asteroid_collision}
            variableSelections={this.state.responseQuote.variable_selections}
            premium={this.state.responseQuote.premium}
            onResetButtonClick={this.onResetButtonClick}
          />
          :
          <UserForm 
            onInputChange={this.onInputChange} 
            onButtonClick={this.onButtonClick}
            enableSubmit={enableSubmit} 
          />
        }
      </React.Fragment>
    )
  }
}

export default App;
