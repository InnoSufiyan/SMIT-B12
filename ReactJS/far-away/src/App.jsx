import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './Components/Logo'
import Form from './Components/Form'
import PackagingList from './Components/PackagingList'

function App() {
  

  return (
    <>
      <Logo />
      <Form />
      <PackagingList />
      {/* <Stats /> */}
    </>
  )
}

export default App
