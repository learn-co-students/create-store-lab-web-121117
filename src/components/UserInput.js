import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserInput extends Component {
  state = {
    hometown:'',
    username:''
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    },()=>{console.log(this.state)})
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })

  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name='username' type='text' onChange={this.handleChange} ></input>
          <input name='hometown' type='text' onChange={this.handleChange} ></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default UserInput;
