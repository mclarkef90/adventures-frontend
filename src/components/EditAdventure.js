import React from 'react'
import { editAdventure } from '../actions/editAdventure'
import { connect } from 'react-redux';

class EditAdventure extends React.Component {

  constructor(props){
    super(props);
    this.state={
      title: "",
      description: "",
      website_url: "",
      image_url: "",
      id: ""
    }
  }

  componentDidMount(){
    console.log(this.props)
    let adventure = this.props.adventures.filter(adventure => adventure.id == this.props.match.params.id)[0]
    console.log(adventure.title)
    this.setState({
      title: adventure.title,
      description: adventure.description,
      website_url: adventure.website_url,
      image_url: adventure.image_url,
      id: adventure.id
    })

  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    this.props.boundeditAdventure(this.state)
    console.log(this.state)
    this.setState({
      title: "",
      description: "",
      website_url: "",
      image_url: "",
      id: ""
    })
  }



  render() {
    let adventure = this.props.adventures.filter(adventure => adventure.id == this.props.match.params.id)[0]
    console.log(adventure)
    console.log(this.props.adventures)
    return(
      <div>
      {adventure ?
        <>

        <form onSubmit={this.handleOnSubmit}>
        <h1>Edit Adventure </h1>
        <label>Title:</label>
        <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Description:</label>
        <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Website URL:</label>
        <input type="text" name="website_url" value={this.state.website_url} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Image URL:</label>
        <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleOnChange}/>
        <br/><br/>
        <input type="submit" value="Submit"/>
        </form>
        </>
        :
        null}
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return { boundeditAdventure: (userEntry) => dispatch(editAdventure(userEntry))
}}


export default connect(null, mapDispatchToProps)(EditAdventure)
