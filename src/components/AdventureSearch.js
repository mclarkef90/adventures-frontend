import React from 'react'
import {connect} from 'react-redux'

class AdventureSearch extends React.Component{

  constructor(props){
    super(props)
    console.log(this.props)
    this.state={
      searchTerm: ""
    }
  }

  searchChangeHandler = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    let results= this.props.adventures.filter((adventure) => adventure.description.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1)

    return(
      <div>
      <br/>
      <input type="text" value={this.state.searchTerm} placeholder="Search Adventures" name="searchTerm" onChange={this.searchChangeHandler}/>
      <br/>


      {results.map(adventure =>
        <ul key={adventure.id}>
        <img className="image_thumbnail" alt="adventure" src={adventure.image_url}/>
        <h1>{adventure.title}</h1>
        <p>{adventure.description}</p>
        </ul>)}

      </div>
    )}
}

function mapStateToProps(state){
  return{
    adventures: state.adventures
  }
}

export default connect(mapStateToProps)(AdventureSearch)
