import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: "",
    hometown: ""
  }

  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  changeHometown = (e) => {
    this.setState({
      hometown: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_USER",
      user: { ...this.state }
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>username</label>
          <input type="text" onChange={this.changeUsername}/>
          <label>hometown</label>
          <input type="text" onChange={this.changeHometown}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
