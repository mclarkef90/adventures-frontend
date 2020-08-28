import React from 'react';
import {Route, Link} from 'react-router-dom';
import Adventure from './Adventure'


export default function CommentsList(props){
  return(
    <div>
    <h2> Comments </h2>
    {console.log(props)}
    {props.comments.map(comment => <span key={comment.id}> {comment.text}
    <br/><br/>
   </span>
     )}
    </div>
      )
    }
