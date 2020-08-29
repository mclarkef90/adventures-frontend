import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {deleteAdventure} from '../actions/deleteAdventure'


class AdventuresList extends React.Component {



  render(){
    return(
      <div>
        <h2> Adventures </h2>
          {this.props.userAdventures.map(adventure =>
            <ul key={adventure.id}>
              <Link to={`/users/${adventure.user_id}/adventures/${adventure.id}`}>{adventure.title}</Link> <br/>
            </ul>)}
      </div>
      )
    }
  }





export default connect(null)(AdventuresList)
