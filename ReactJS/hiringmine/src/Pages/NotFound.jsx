import React, { useReducer } from 'react'
import { actions } from '../Utils/Constants'

const reducer = (state, action) => {
  console.log(state, "===>> state")
  console.log(action, "===>> action")
  if (action.type === "Withdraw") {
    return state - action.payload
  }
  if (action.type === "Deposit") {
    return state + action.payload
  }

  return state
}

function NotFound() {

  const [bank, dispatch] = useReducer(reducer, 5000)

  return (
    <>
      <h1>My Bank Balance {bank}</h1>
      <button onClick={() => dispatch({ type: actions.withdraw, payload: 500 })}>Withdraw</button>
      <button onClick={() => dispatch({ type: actions.deposit, payload: 500 })}>Deposit</button>
      <button onClick={() => dispatch("abdullah")}>Deposit</button>  //new developer
    </>
  )
}

export default NotFound