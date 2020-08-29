import React from 'react';
import {connect} from 'react-redux';
import AdventuresList from '../components/AdventuresList';
import Adventure from '../components/Adventure';
import NewAdventure from '../components/NewAdventure';
import EditAdventure from '../components/EditAdventure';
import { fetchAdventures } from '../actions/fetchAdventures.js';
import { addLike } from '../actions/addLike.js';
import {Route, Switch} from 'react-router-dom';
import User from '../components/User'

class AdventuresContainer extends React.Component {

  componentDidMount(){
    this.props.fetchAdventures()
  }

  likeHandler = (event) => {
    event.persist()
    let id= parseInt(event.target.dataset.id)
    let likes= parseInt(event.target.dataset.likes)
    let updatedLikes= likes + 1
    this.props.addLike(id, updatedLikes)
  }

  render(){
    return(
      <div>
      <br/>
      <Switch>
        <Route path='/users/:id/adventures/new' render={(routerProps) => <NewAdventure {...routerProps} />}/>
        <Route path='/adventures/:id' render={(routerProps) => <Adventure {...routerProps} likeHandler={this.likeHandler}/>}/>
      </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  adventures: state.adventures,
  users: state.users
  }
}

export default connect(mapStateToProps, {fetchAdventures, addLike})(AdventuresContainer)
