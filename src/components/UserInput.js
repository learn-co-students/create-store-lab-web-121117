import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: "",
    hometown: ""
  }

  changeUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  changeHometown = event => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.changeUsername}/>
          <input type="text" value={this.state.hometown} onChange={this.changeHometown}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
