import React from 'react'
import { useToggleTheme } from '../Context/Store'

function Comp2() {
  const { state } = useToggleTheme()
  return (
    <div style={{
      backgroundColor: state.darkTheme ? 'black' : 'white',
      color: state.darkTheme ? 'white' : 'black'
    }}>Comp2 {state.counter}</div>
  )
}

export default Comp2