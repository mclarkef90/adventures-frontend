import React from 'react';
import {Route, Link} from 'react-router-dom';
import User from './User';

export default function UsersList(props) {
  
  return (

    <div>
    {props.users.map(user => <span key={user.id}> <Link to={`/users/${user.id}`}>{user.name}</Link>
    <br/><br/>
   </span>
     )}
    </div>
      )
    }
