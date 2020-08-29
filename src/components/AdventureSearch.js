import React from 'react'
import {connect} from 'react-redux'

class AdventureSearch extends React.Component{

  constructor(props){
    super(props)
    console.log(this.props)
  }

  render(){
    return(
      <div>
      <br/>
      hi

      </div>
    )}
}

function mapStateToProps(state){
  return{
    adventures: state.adventures
  }
}

export default connect(mapStateToProps)(AdventureSearch)
