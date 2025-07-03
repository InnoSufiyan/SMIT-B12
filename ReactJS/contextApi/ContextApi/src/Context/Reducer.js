export const reducer = (state, action) => {       //initialValue
  switch (action.type) {
    case 'themeHandler':
      return {...state, darkTheme: !state.darkTheme}    // {darkTheme: true}
      break;
    case 'counterIncrement':
      return {...state, counter: state.counter + 1}    
      break;
    case 'counterDecrement':
      return {...state, counter: state.counter - 1}    
      break;
  
    default:
      break;
  }
}