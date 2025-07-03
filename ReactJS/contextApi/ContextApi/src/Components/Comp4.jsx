import React from 'react'
import { useToggleTheme } from '../Context/Store'

function Comp4() {
  const { state } = useToggleTheme()

  return (
    <div style={{
      backgroundColor: state.darkTheme ? 'black' : 'white',
      color: state.darkTheme ? 'white' : 'black'
    }}>Comp4 {state.counter}</div>
  )
}

export default Comp4