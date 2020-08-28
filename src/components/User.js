import React from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom'
import AdventuresList from './AdventuresList';
import CommentsList from './CommentsList';



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

    <Link to={`/edit/${user.id}`}>Edit User Profile</Link><br/>



    <button onClick={(id) => props.handleDelete(user.id)} >Delete User Profile</button><br/>
    
    <Link to={`/users/${user.id}/adventures/new`}>Add New Adventure</Link><br/>

    <AdventuresList adventures={user.adventures}/>
    <CommentsList comments={user.comments}/>


    </>
    :
    null

    }
    </div>
    </>
  )
  }

  export default User
