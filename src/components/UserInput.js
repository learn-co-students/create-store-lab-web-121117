import React, { Component } from "react";

class UserInput extends Component {
  state = {
    username: "",
    hometown: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    });
    console.log(this.props.store.getState());
  };

  render() {
    return (
      <div>
        <input type="text" name="username" onChange={this.handleChange} />
        <input type="text" name="hometown" onChange={this.handleChange} />
        <button onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default UserInput;
