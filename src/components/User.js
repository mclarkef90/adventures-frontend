import React from 'react'
import {Link, Redirect, Route} from 'react-router-dom'
import EditUser from './EditUser';

const User = (props) => {

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  let user = props.users.filter(user => user.id == props.match.params.id)[0]

  console.log(user)

  return (
    <>
    <div>
    {user ?
      <>


    <h3>Profile</h3>


    <Link to={`/edit/${user.id}`}>Edit</Link>
    <nbsp/> <button onClick={(id) => props.handleDelete(user.id)} >Delete</button>
    <p>Name: {user.name} </p>
    <p>Email: {user.email}</p>
    <p>Location: {user.city}, {user.state} </p>
    <p>Adventures</p>

    {user.adventures.map(adventure => <ul>{adventure.title} - Edit | Delete</ul>)}

    <p>Comments</p>

    {user.comments.map(comment => <ul>{comment.text} - Edit | Delete</ul>)}

    </>
    :
    null

    }
    </div>
    </>
  )
  }

  export default User
