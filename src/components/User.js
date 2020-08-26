import React from 'react'
import {Redirect} from 'react-router-dom'

const User = (props) => {

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  let user = props.users.filter(user => user.id == props.match.params.id)[0]

  console.log(user)



  return (

    <div>
    <h3>Profile</h3>
    <button data-id={user ? user.id : null}>Edit</button> <nbsp/> <button onClick={(id) => props.handleDelete(user.id)} >Delete</button>
    <p>Name: {user ? user.name : null} </p>
    <p>Email: {user ? user.email : null} </p>
    <p>Location: {user ? user.city : null}, {user ? user.state : null} </p>
    <p>Adventures</p>

    {user ? user.adventures.map(adventure => <ul>{adventure.title} - Edit | Delete</ul>) : null}

    <p>Comments</p>

    {user ? user.comments.map(comment => <ul>{comment.text} - Edit | Delete</ul>) : null}

    </div>
  )
}

export default User
