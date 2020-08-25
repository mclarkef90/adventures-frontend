import React from 'react';
import {connect} from 'react-redux';
import AdventuresList from '../components/AdventuresList';
import Adventure from '../components/Adventure';
import NewAdventure from '../components/NewAdventure';
import { fetchAdventures } from '../actions/fetchAdventures.js';
import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'

class AdventuresContainer extends React.Component {

  componentDidMount(){
    this.props.fetchAdventures()
  }

  render(){
    return(
      <div>
      <br/>
      <Switch>
        <Route exact path='/adventures/:id' render={(routerProps) => <Adventure {...routerProps} adventures={this.props.adventures}/>}/>
        <Route exact path='/adventures' render={(routerProps) => <AdventuresList {...routerProps} adventures={this.props.adventures}/>}/>
      </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
  adventures: state.adventures
  }
}

export default connect(mapStateToProps, {fetchAdventures})(AdventuresContainer)
