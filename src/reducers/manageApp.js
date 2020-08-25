export default function manageApp(state= {
  users: [],
  adventures: [],
}, action) {
  switch (action.type) {

    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload,
        
        }

    case 'FETCH_ADVENTURES':
      return {
        ...state,
        adventures: action.payload
      }

    default:
      return state
  }
}
