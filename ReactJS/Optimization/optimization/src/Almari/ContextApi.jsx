import React, { createContext, useContext, useReducer } from 'react'

const AlmariContext = createContext()

export const almariUse = () => {
  return useContext(AlmariContext)
}


const initialState = {
  themeDark: true
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'themeHandler':
      return { ...state, themeDark: !state.themeDark }
      break;

    default:
      return state
      break;
  }
}

function ContextApi({ children }) {


  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <AlmariContext.Provider value={{
        state,
        dispatch
      }}>
        {children}
      </AlmariContext.Provider>
    </>
  )
}

export default ContextApi