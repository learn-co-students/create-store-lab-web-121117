export default function manageUsers(state = { users: []}, action){
  console.log("reducer hit", action)
  switch(action.type){
    case 'ADD_USER':
      return { users: [...state.users, action.user]}
    default:
      return { ...state }
  }
}


// export default function changeCount(state = {
//   count: 0,
// }, action) {
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return { count: state.count + 1 };
//     default:
//       return state;
//   };
// };
