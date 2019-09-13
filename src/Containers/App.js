import React, { Component } from 'react';
import Nav from '../Components/Nav';
import UserForm from './UserForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: {
        line_1: '',
        line_2: null,
        city: '',
        region: '',
        postal: ''
      }
    }
  }
  
  onInputChange = (e, type) => {
    console.log(e.target.value, type);
  }
  
  render() {
    return (
      <React.Fragment>
        <Nav />
        <UserForm onInputChange={this.onInputChange} />
      </React.Fragment>
    )
  }
}

export default App;
