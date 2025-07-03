import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'
import Comp3 from './Components/Comp3'
import Comp4 from './Components/Comp4'
import Store, { useToggleTheme } from './Context/Store.jsx'

function App() {

  const {dispatch} = useToggleTheme()

  return (
    <>
        <button onClick={() => dispatch({type: 'themeHandler'})}>Toggle Theme</button>
        <button onClick={() => dispatch({type: 'counterIncrement'})}>Increment</button>
        <button onClick={() => dispatch({type: 'counterDecrement'})}>Decrement</button>
        <Comp1 />
        <Comp2 />
        <Comp3 />
        <Comp4 />
    </>
  )
}

export default App
