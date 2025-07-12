const initialState = {
  isLoading: false,
  theme: 'Light',
  users: [],
  count: 97
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'isLoading':
      return {...state, isLoading: true}
      break;
    case 'notLoading':
      return {...state, isLoading: false}
      break;
    case 'darkTheme':
      return {...state, theme: 'Dark'}
      break;
    case 'lightTheme':
      return {...state, theme: 'Light'}
      break;
    case 'countIncrement':
      return {...state, count: state.count + 1}
      break;
    case 'countDecrement':
      return {...state, count: state.count - 1}
      break;
    case 'addUsers':
      return {...state, users: action.payload}
      break;
  
    default:
      return state
      break;
  }
}