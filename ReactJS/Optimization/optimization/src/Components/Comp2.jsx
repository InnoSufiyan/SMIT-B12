import React from 'react'
import { almariUse } from '../Almari/ContextApi'

function Comp2() {
  const { dispatch } = almariUse()
  return (
    <>
      <button onClick={() => dispatch({
        type: 'themeHandler'
      })}>Click to change theme</button>
    </>
  )
}

export default Comp2