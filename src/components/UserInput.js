import React, { Component } from 'react';

class UserInput extends Component {
  
  state = {
    username: '',
    hometown: ''
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', user: {username: this.state.username, hometown: this.state.hometown}})
  }
  
  handleNameInput = event => {
    this.setState({username: event.target.value})
  }
  
  handleTownInput = event => {
    this.setState({hometown: event.target.value})
  }
  
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
          value={this.state.username} 
          onChange={this.handleNameInput}
        />
        <input type="text" 
          value={this.state.hometown} 
          onChange={this.handleTownInput}
        />
        <input type="submit" />
      </form>
    );
  }
};

export default UserInput;
