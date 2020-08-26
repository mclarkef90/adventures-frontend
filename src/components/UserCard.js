import React from 'react';
import {Route, Link} from 'react-router-dom';
import User from './User';

export default function UserCard(props) {
  console.log(props.user.name)

  return (

    <div>
    <Link to={`/users/${props.user.id}`}>{props.user.name}</Link>

    <br/><br/>
    </div>
      )
    }
