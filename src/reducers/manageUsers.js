let defaultState={
  users:[]
}

export default function manageUsers(state=defaultState, action){
  switch (action.type){
    case 'ADD_USER':
      console.log(action.user)
      return{
        users: [...state.users, action.user]
      }

    default:
      return state
  }
}
