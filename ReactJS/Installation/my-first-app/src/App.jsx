import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Heading } from './Heading'
import { MenuHeading } from './MenuHeading'
import { AllFoodItems } from './AllFoodItems'
import { Description } from './Description'
import { Sufiyan } from './Sufiyan'
import Button from './Button'
import Zain from './Zain'

function App() {

  const callAdnanFatta = () => {
    console.log("Calling Adnan Fatta")
  }

  return (
    <>
      {/* <Heading />
      <MenuHeading />
      <Description />
      <AllFoodItems /> */}
      {/* <Footer /> */}

      {/* <Sufiyan name='Muhammad Sufiyan' age={34} /> */}

      <Button color='blue' text='blue' />
      <Button color='red' text='red' ZainComponent={Zain} />
      <Button color='green' text='green' callAdnanFatta={callAdnanFatta} />
    </>
  )
}

export default App
