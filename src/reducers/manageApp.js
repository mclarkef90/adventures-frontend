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

    case 'ADD_LIKE':
      let likesUpdate= [...state.adventures].filter(adventure => adventure.id !== action.payload.id)
      return {
        ...state, adventures: [...likesUpdate, action.payload],
      }

    case 'CREATE_USER':
      let usersUpdate= [...state.users].filter(user => user.id !== action.payload.id)
      return {
        ...state, users: [...usersUpdate, action.payload],
      }

    case 'DELETE_USER':
      let userslist= [...state.users].filter(user => user.id !== action.payload)
      return {
        ...state, users: [...userslist]
      }

    default:
      return state
  }
}
