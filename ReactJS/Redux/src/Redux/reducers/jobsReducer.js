const initialState = {
  jobs: [],
}

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addJobs':
      return {...state, jobs: action.payload}
      break;
  
    default:
      return state
      break;
  }
}