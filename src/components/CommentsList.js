import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Adventure from './Adventure'
import EditComment from './EditComment'


export default function CommentsList(props){
  return(
    <div>
    <h2> Comments </h2>
    {console.log(props)}
    {props.comments.map(comment => <span key={comment.id}> {comment.text}
    <br/><br/>

    <Link to={`/users/${comment.user_id}/comments/${comment.id}/edit`}> Edit Comment </Link> <br/><br/>

    <Switch>
    <Route path="/users/:id/comments/:comment_id/edit" render={(routerProps) => <EditComment {...routerProps} comment={comment}/>} />
    </Switch>


   </span>
     )}

    </div>
      )
    }
