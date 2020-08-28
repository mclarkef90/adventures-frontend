import React from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom'
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

    <p>Name: {user.name} </p>
    <p>Email: {user.email}</p>
    <p>Location: {user.city}, {user.state} </p>

    <Link to={`/edit/${user.id}`}>Edit</Link>

    <button onClick={(id) => props.handleDelete(user.id)} >Delete</button>




    <Route path='/test' render={() => <h3>Adventures</h3> } />
    <Route path='/comments' render={() => <p>Comments</p>
    }/>




    </>
    :
    null

    }
    </div>
    </>
  )
  }

  export default User
