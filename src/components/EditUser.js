import React from 'react'
import { connect } from 'react-redux';
import { editUser } from '../actions/editUser'

class EditUser extends React.Component {

  constructor(props){
    super(props)
    console.log(props.user)
    this.state={
      name: props.user.name,
      email: props.user.email,
      city: props.user.city,
      state: props.user.state
    }
    console.log(this.state)
  }


  render(){
    return(
    <div>hi</div>
    )
  }
}

export default connect(null, {editUser})(EditUser)
