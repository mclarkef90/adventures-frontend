import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Adventure from './Adventure'
import EditAdventure0 from './EditAdventure0'


export default function AdventuresList(props){
  return(
    <div>
    {console.log(props)}
    <h2> Adventures </h2>
    {console.log(props)}

    {props.adventures.map(adventure => <span key={adventure.id}> <Link to={`/adventures/${adventure.id}`}>{adventure.title}  </Link> <br/>
    <Link to={`/users/${adventure.user_id}/adventures/${adventure.id}/edit`}> Edit Adventure </Link> <br/><br/>

    <Switch>
    <Route path="/users/:id/adventures/:adventure_id/edit" render={(routerProps) => <EditAdventure0 {...routerProps} adventure={adventure}/>} />

    </Switch>

   </span>)}



    </div>
      )
    }
