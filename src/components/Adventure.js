import React from 'react'
import {connect} from 'react-redux'
import {deleteAdventure} from '../actions/deleteAdventure'


class Adventure extends React.Component {

  constructor(props){
    super(props)
    console.log(this.props)

  }

  handleDelete =(event) => {
    let id= parseInt(event.target.dataset.id)
    this.props.boundDeleteAdventures(id)
  }

  render(){
    let id= this.props.match.params.id
    let aId= this.props.match.params.adventure_id
    let adventure= this.props.adventures.filter(adventure => adventure.id == aId)[0]
    console.log(adventure)
    console.log(id, aId)

    return(
      <div>
      {adventure ?
        <>
          <h2>{adventure.title}, by: name </h2>
          <img alt="activity" src= {adventure.image_url}/>
          <p>{adventure.description} </p>
          <a href={adventure.website_url}>Learn More</a><br/><br/>
          <button onClick={() => this.props.history.goBack()}>Close</button>{'  '}
          <button onClick={() => this.props.history.push(`/users/${adventure.user_id}/adventures/${adventure.id}/edit`)}> Edit Adventure </button> {'  '}
          <button data-id={adventure.id} onClick={this.handleDelete}> Delete Adventure </button> <br/><br/>
        </>
        :
        null}
      </div>)}
}

  const mapStateToProps = state => {
    return {
    users: state.users,
    adventures: state.adventures
    }
  }

  function mapDispatchToProps(dispatch){
    return {boundDeleteAdventures: (id) => dispatch(deleteAdventure(id))
  }}


  export default connect(mapStateToProps, mapDispatchToProps)(Adventure)


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
