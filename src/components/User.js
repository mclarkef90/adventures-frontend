import React from 'react'
import {Redirect} from 'react-router-dom'

const User = (props) => {

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  let user = props.users.filter(user => user.id == props.match.params.id)[0]

  console.log(user)

  return (

    <div>
    <h2>Name: {user ? user.name : null} </h2>
    <p>Email: {user ? user.email : null} </p>
    <p>Location: {user ? user.city : null}, {user ? user.state : null} </p>
    <p>Adventures</p>
    <p>Comments</p>
    </div>
  )
}

export default User
