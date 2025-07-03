import React from 'react'
import { useToggleTheme } from '../Context/Store'

function Comp3() {
  const { state } = useToggleTheme()
  return (
    <div style={{
      backgroundColor: state.darkTheme ? 'black' : 'white',
      color: state.darkTheme ? 'white' : 'black'
    }}>Comp3 {state.counter}</div>
  )
}

export default Comp3