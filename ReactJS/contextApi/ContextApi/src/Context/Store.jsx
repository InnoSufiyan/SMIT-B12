import React, { createContext, useContext, useReducer } from 'react'
import { reducer } from './Reducer'

const ToggleTheme = createContext()

export const useToggleTheme = () => {
  return useContext(ToggleTheme)
}

const initialValue = {
  darkTheme: false,
  counter: 0
  // jobs: [],
  // users: [],
  // isLoggedIn: true
}

function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <ToggleTheme.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </ToggleTheme.Provider>
  )
}

export default Store