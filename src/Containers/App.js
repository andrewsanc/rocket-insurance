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
  
  onInputChange = (e, key) => {
    this.setState({ [key]: e.target.value })
  }

  onButtonClick = () => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
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
  
  render() {
    return (
      <React.Fragment>
        <Nav />
        {
         this.state.data ? 
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
          />
        }
      </React.Fragment>
    )
  }
}

export default App;
