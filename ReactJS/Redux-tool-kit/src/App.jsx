import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { apiCall, counterIncrement, darkTheme, lightTheme } from './Redux/Slices/usersSlice'

function App() {
  const { count, theme } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  return (
    <div style={{
      backgroundColor: theme == 'Dark' ? 'black' : 'white',
      color: theme == 'Dark' ? 'white' : 'black',
    }}>
      <button onClick={() => dispatch(darkTheme())}>Dark Theme</button>
      <button onClick={() => dispatch(lightTheme())}>Light Theme</button>
      <button onClick={() => dispatch(apiCall())}>Get Jobs</button>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(counterIncrement())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
