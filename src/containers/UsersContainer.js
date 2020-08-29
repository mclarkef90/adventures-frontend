import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom'

import UsersList from '../components/UsersList';
import User from '../components/User';
import EditUser from '../components/EditUser';

import { fetchUsers } from '../actions/fetchUsers.js';
import { deleteUser } from '../actions/deleteUser.js';

class UserContainer extends React.Component {

  componentDidMount(){
    this.props.fetchUsers()
  }

  handleDelete =(event) => {
    let id= event
    this.props.deleteUser(id)
    return <Redirect to="/users" />
    }

  handleEdit =(event) => {
    let id= event
    return <Redirect to='/edit'/>
    }

  render(){
    return(
      <div>
      <br/>
      <Switch>

        <Route path='/users/:id' render={(routerProps) => <User {...routerProps} adventures= {this.props.adventures} users={this.props.users} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>}/>
        <Route path='/users' render={(routerProps) => <UsersList {...routerProps} users={this.props.users}/>}/>
        <Route path='/edit/:id' render={(routerProps) => <EditUser {...routerProps} users={this.props.users !== [] && this.props.users} />}/>

      </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  users: state.users,
  adventures: state.adventures
  }
}

export default connect(mapStateToProps, {fetchUsers, deleteUser})(UserContainer)
