import React from 'react';
import {Link} from 'react-router-dom';
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
              <Link to={`/users/${adventure.user_id}/adventures/${adventure.id}`}>{adventure.title}</Link> <br/>
              <Link to={`/users/${adventure.user_id}/adventures/${adventure.id}/edit`}> Edit Adventure </Link> <br/><br/>
              <button data-id={adventure.id} onClick={this.handleDelete}> Delete Adventure </button> <br/><br/>

            </ul>)}
      </div>
      )
    }
  }



function mapDispatchToProps(dispatch){
  return {boundDeleteAdventures: (id) => dispatch(deleteAdventure(id))
}}

export default connect(null, mapDispatchToProps)(AdventuresList)
