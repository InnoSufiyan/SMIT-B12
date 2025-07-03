import React from 'react'
import { useToggleTheme } from '../Context/Store'

function Comp1() {
  const { state } = useToggleTheme()
  return (
    <div style={{
      backgroundColor: state.darkTheme ? 'black' : 'white',
      color: state.darkTheme ? 'white' : 'black'
    }}>Comp1 {state.counter}</div>

  )
}

export default Comp1