import React, { Component } from 'react';
import Nav from '../Components/Nav';
import UserForm from './UserForm';

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Nav />
        <UserForm />
      </React.Fragment>
    )
  }
}

export default App;
