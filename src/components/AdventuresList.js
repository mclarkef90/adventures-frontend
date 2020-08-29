import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Adventure from './Adventure'
import EditAdventure0 from './EditAdventure0'
import {connect} from 'react-redux'
import {deleteAdventure} from '../actions/deleteAdventure'


class AdventuresList extends React.Component {

  handleDelete =(event) => {
    let id= parseInt(event.target.dataset.id)
    this.props.boundDeleteAdventures(id)
  }

  render(){
    return(
      <div>
        <h2> Adventures </h2>
          {this.props.userAdventures.map(adventure =>
            <ul key={adventure.id}>
              <Link to={`/adventures/${adventure.id}`}>{adventure.title}</Link> <br/>
              <Link to={`/users/${adventure.user_id}/adventures/${adventure.id}/edit`}> Edit Adventure </Link> <br/><br/>
              <button data-id={adventure.id} onClick={this.handleDelete}> Delete Adventure </button> <br/><br/>
              <Switch>
                <Route path="/users/:id/adventures/:adventure_id/edit" render={(routerProps) => <EditAdventure0 {...routerProps} adventure={adventure}/>} />
              </Switch>
            </ul>)}
      </div>
      )
    }
  }



function mapDispatchToProps(dispatch){
  return {boundDeleteAdventures: (id) => dispatch(deleteAdventure(id))
}}

export default connect(null, mapDispatchToProps)(AdventuresList)
