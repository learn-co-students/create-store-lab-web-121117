import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserInput extends Component {
  state = {
    username: "",
    hometown: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }

  render() {
    console.log("user props",this.props)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="username" />
          <input type="text" name="username" onChange={this.handleChange}></input>
          <label for="hometown" />
          <input type="text" name="hometown" onChange={this.handleChange}></input>
          <input type="submit"/>
        </form>
      </div>
    );
  }


};

export default connect()(UserInput);

// 1) has an text input for the username field
//    2) has an initial state with username key set to empty string
//    3) has an initial state with hometown key set to empty string
//    4) has changes the state of username on change of the username input
//    5) has changes the state of hometown on change of the hometown input
//    6) updates the store when the form is submitted
