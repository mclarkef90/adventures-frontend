import React from 'react'
import { editComment } from '../actions/editComment'
import { connect } from 'react-redux';

class EditComment extends React.Component {

  constructor(props){
    super(props);
    console.log(props)
    let id= this.props.match.params.id
    let user= this.props.users.filter(user=> user.id == id)[0]
    let comments= user.comments
    let cId= this.props.match.params.comment_id
    let comment=comments.filter(comment => comment.id == cId)[0]
    console.log(comment)
    console.log(comments)


    this.state={
      text: comment.text,
      id: comment.id,
      user: comment.user_id,
      adventure_id: comment.adventure_id
    }
  }


  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    event.persist()
    let user= parseInt(this.state.user)
    this.props.boundeditComment(this.state)
    console.log(this.state)
    this.setState({
      text: "",
      id: "",
      user: ""
    })
    this.props.history.push(`users/${user}`)
}

  render() {
    return(
      <div>
        <form data-id={this.state.id} onSubmit={this.handleOnSubmit}>
        <h1>Edit Comment </h1>
        <label>Text:</label>
        <input type="text" name="text" value={this.state.text} onChange={this.handleOnChange}/>
        <br/><br/>
        <input type="submit" value="Submit"/>
        </form>
        <button onClick={() => this.props.history.goBack()}>Cancel</button>
        </div>
        )
      }
    }

function mapStateToProps(state) {
  return { users: state.users}
}

function mapDispatchToProps(dispatch) {
  return { boundeditComment: (userEntry) => dispatch(editComment(userEntry))
}}


export default connect(mapStateToProps, mapDispatchToProps)(EditComment)
