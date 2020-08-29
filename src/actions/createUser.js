
export function createUser({name, email, city, state}) {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({name, email, city, state})
      }
    )
    .then(response => response.json())
    .then(user => dispatch({
      type: 'CREATE_USER',
      payload: user
    }))
    }
  }
