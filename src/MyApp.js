import React from 'react'
import UsersContainer from './containers/UsersContainer'
import AdventuresContainer from './containers/AdventuresContainer'


export default class MyApp extends React.Component {

  render(){
    return(
      <div>
      <UsersContainer />
      <AdventuresContainer />
      </div>
    )
  }
}
