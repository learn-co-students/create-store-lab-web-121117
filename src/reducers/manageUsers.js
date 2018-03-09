export default function manageUsers(state = { users: []}, action){
  switch(action.type){
    case 'ADD_USER':
      return {...state, users: [...state.users, {action.user.username, action.user.hometown]}
    default:
      return state
  }
}
