import React, { memo } from 'react'
import { almariUse } from '../Almari/ContextApi'

function Comp1() {
  const state = almariUse()

  for (let index = 0; index < 10000; index++) {
    console.log(index)
  }

  console.log(state)

  console.log(state.state.themeDark, "===>> state.themeDark")
  return (
    <>
      <div>Is the Theme Dark ??? {state.state.themeDark ? 'Yes' : 'No'}</div>
    </>
  )
}

export default memo(Comp1)