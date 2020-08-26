import React from 'react';
import {connect} from 'react-redux';
import UsersList from '../components/UsersList';
import User from '../components/User';
import NewUserForm from '../components/NewUserForm';
import { fetchUsers } from '../actions/fetchUsers.js';
import { deleteUser } from '../actions/deleteUser.js';

import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'

class UserContainer extends React.Component {

  componentDidMount(){
    this.props.fetchUsers()
  }

  handleDelete =(event) => {
    let id= event
    this.props.deleteUser(id)
    }

  render(){
    return(
      <div>
      <NavBar/>
      <br/>
      <Switch>

        <Route exact path='/users/new' render={(routerProps) => <NewUserForm {...routerProps} /> }/>
        <Route path='/users/:id' render={(routerProps) => <User {...routerProps} users={this.props.users} handleDelete={this.handleDelete}/>}/>
        <Route path='/users' render={(routerProps) => <UsersList {...routerProps} users={this.props.users}/>}/>

      </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  users: state.users
  }
}

export default connect(mapStateToProps, {fetchUsers, deleteUser})(UserContainer)
