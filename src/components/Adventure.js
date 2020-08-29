import React from 'react'
import {Link, Switch, Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import NewComment from './NewComment'

class Adventure extends React.Component {

  constructor(props){
    super(props)
    console.log(this.props)

  }

  render(){
    let id= this.props.match.params.id
    let aId= this.props.match.params.adventure_id
    let adventure= this.props.adventures.filter(adventure => adventure.id == aId)[0]
    console.log(adventure)
    console.log(id, aId)

    return(<div>
      <h2>{adventure.title}, by: name </h2>
      <img src= {adventure.image_url}/>
      <p>{adventure.description} </p>
      <a href={adventure.website_url}>Learn More</a><br/>
      <button onClick={() => this.props.history.goBack()}>Close</button>
      <Link to={`/users/${adventure.user_id}/adventures/${adventure.id}/edit`}> Edit Adventure </Link> <br/><br/>



      </div>)}
}

  const mapStateToProps = state => {
    return {
    users: state.users,
    adventures: state.adventures
    }
  }


  export default connect(mapStateToProps)(Adventure)


// render(){
//   let adventure= this.props.adventure
//   return (
//
//     <div>
//     {adventure ?
//       <>
//
// <h2>{adventure.title}, by: name </h2>
// <img src= {adventure.image_url}/>
// <p>{adventure.description} </p>
// <a href={adventure.website_url}>Learn More</a>
// <p>Like: <button data-id= {adventure.id} data-likes={adventure.likes} onClick={this.props.likeHandler}>{adventure.likes}</button> </p>
//
// <h3>Comments: </h3>
// <Link to={`/adventures/${adventure.id}/comments/new`}>Add a Comment</Link>
// {adventure.comments.map(comment => <p>{comment.text}</p>) }
//
//
//     <Switch>
//     <Route path='/adventures/:id/comments/new' render={(routerProps) => <NewComment {...routerProps}/>}/>
//     </Switch>
//     </>
//     :
//     null
//   }
//
//     </div>
//
//
//   )
// }
//
// }
//
//
