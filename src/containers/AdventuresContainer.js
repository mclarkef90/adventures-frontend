import React from 'react';
import {connect} from 'react-redux';
import AdventuresList from '../components/AdventuresList';
import Adventure from '../components/Adventure';
import NewAdventure from '../components/NewAdventure';
import { fetchAdventures } from '../actions/fetchAdventures.js';
import { addLike } from '../actions/addLike.js';
import {Route, Switch} from 'react-router-dom'

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
        <Route exact path='/adventures/:id' render={(routerProps) => <Adventure {...routerProps} adventures={this.props.adventures} likeHandler={this.likeHandler}/>}/>
        <Route exact path='/adventures' render={(routerProps) => <AdventuresList {...routerProps} adventures={this.props.adventures}/>}/>
      </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  adventures: state.adventures
  }
}

export default connect(mapStateToProps, {fetchAdventures, addLike})(AdventuresContainer)
