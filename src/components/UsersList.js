import React from 'react';
import {Route, Link} from 'react-router-dom';
import User from './User';
import UserCard from './UserCard';
import EditUser from './EditUser';

export default function UsersList(props) {
  let list= props.users.map(user => <><h1>{user.name}</h1><Link to={`/users/${user.id}`}>Profile</Link>
 </>)


  return(
    <div>
    {list}
    </div>
  )
}

  // return (
  //
  //   <div>
  //   {props.users.map(user => <span key={user.id}>
  //
  //
  //     <Link to={`/users/${user.id}`}>{user.name}</Link>
  //   <br/><br/>
  //  </span>
  //    )}
  //   </div>
  //     )
  //   }
