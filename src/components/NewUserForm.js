import React from 'react'
import { createUser } from '../actions/createUser'
import { connect } from 'react-redux';

class NewUserForm extends React.Component {

  constructor(props){
    super(props);
    this.state={
      name: "",
      email: "",
      city: "",
      stateAbrev: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.props)
    this.props.createUser(this.state)
    this.setState({
      name: "",
      email: "",
      city: "",
      state: ""
    })
    this.props.history.push('/users')
  }

  render() {
    console.log(this.props)

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <h2>Create User Profile</h2>
        <label>Name:</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Email:</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>City:</label>
        <input type="text" name="city" value={this.state.city} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>State:</label>
        <input type="text" name="state" value={this.state.state} onChange={this.handleOnChange}/>
        <br/><br/>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

}

// const mapStateToProps = state => {
//   return {
//   users: state.users
//   }
// }

export default connect(null, {createUser})(NewUserForm)
