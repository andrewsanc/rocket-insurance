import React, { Component } from 'react';
import Nav from '../Components/Nav';
import UserForm from './UserForm';

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
      postal: ''
    }
  }
  
  onInputChange = (e, key) => {
    this.setState({ [key]: e.target.value })
  }

  onButtonClick = () => {
    console.log('form submitted!')
  }
  
  render() {
    return (
      <React.Fragment>
        <Nav />
        <UserForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} />
      </React.Fragment>
    )
  }
}

export default App;
