import React, { Component } from 'react';
import Nav from '../Components/Nav';
import UserForm from './UserForm';
import QuoteOverview from './QuoteOverview';

const dummyData = {
  quoteId: 'UP5681999',
  rating_address: {
    line_1: '124 Conch Street',
    line_2: '',
    city: 'Bikini Bottom',
    region: 'Ocean',
    postal: '11211'
  },
  policy_holder: {
    first_name: 'Spongebob',
    last_name: 'Squarepants'
  },
  variable_options: {
    deductible: {
      title: 'Deductible',
      description: 'The amount of money you will pay in an insurance claim before the insurance coverage kicks in.',
      values: [
        500,
        1000,
        2000
      ],
      'default': 500
    },
    asteroid_collision: {
      title: 'Asteroid Collision Limit',
      description: 'The maximum amount covered for damages caused by asteroid collisions.',
      values: [
        100000,
        300000,
        500000,
        1000000
      ],
      'default': 100000
    }
  },
  variable_selections: {
    deductible: 500,
    asteroid_collision: 100000
  },
  premium: 6000
}

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
      responseQuote: dummyData
    }
  }
  
  onInputChange = (e, key) => {
    this.setState({ [key]: e.target.value })
  }

  onButtonClick = () => {
    console.log('form submitted!');
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
      .then(response => this.setState({ responseQuote: response.quote }))
      .catch(error => console.log(error))
  }
  
  render() {
    return (
      <React.Fragment>
        <Nav />
        {/* <UserForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} /> */}
        <QuoteOverview 
          policyHolder={this.state.responseQuote.policy_holder} 
          deductible={this.state.responseQuote.variable_options.deductible}
          asteroidCollision={this.state.responseQuote.variable_options.asteroid_collision}
          variableSelections={this.state.responseQuote.variable_selections}
          premium={this.state.responseQuote.premium}
        />
      </React.Fragment>
    )
  }
}

export default App;
