import React, { Component } from 'react';

class UserInput extends Component {

  state = {
     username: '',
     hometown: '',
   }

   handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  }

  handleHometown = (event) => {
    this.setState({
      hometown: event.target.value,
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    });
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}/>
          </p>
          <p>
            <input
              type="text"
              value={this.state.hometown}
              onChange={this.handleHometown}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
