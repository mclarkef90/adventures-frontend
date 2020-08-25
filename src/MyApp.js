import React from 'react'


export default class MyApp extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users/1/comments')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render(){
    return(
      <div>
      Hi
      </div>
    )
  }
}
