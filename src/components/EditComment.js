import React from 'react'
import { editComment } from '../actions/editComment'
import { connect } from 'react-redux';

class EditComment extends React.Component {

  constructor(props){
    super(props);
    console.log(props)

    this.state={
      text: props.comment.text,
      id: props.comment.id,
      adventure: props.comment.adventure_id
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
    let id= this.props.comment.id
    console.log(id)
    console.log(this.state)
    this.props.boundeditComment(this.state)
    console.log(this.state)
    this.setState({
      text: "",

    })
    this.props.history.push('/adventures')


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


      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return { boundeditComment: (userEntry) => dispatch(editComment(userEntry))
}}


export default connect(null, mapDispatchToProps)(EditComment)
