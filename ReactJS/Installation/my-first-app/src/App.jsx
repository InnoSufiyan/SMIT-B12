import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Heading } from './Heading'
import { MenuHeading } from './MenuHeading'
import { AllFoodItems } from './AllFoodItems'
import { Description } from './Description'

function App() {

  return (
    <>
      <Heading />
      <MenuHeading />
      <Description />
      <AllFoodItems />
      {/* <Footer /> */}
    </>
  )
}

export default App
