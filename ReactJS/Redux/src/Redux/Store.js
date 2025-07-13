import { combineReducers, createStore } from "redux";
import { usersReducer } from "./reducers/usersReducer";
import { jobsReducer } from "./reducers/jobsReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  users: usersReducer,
  jobs: jobsReducer
})

export const Store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
))