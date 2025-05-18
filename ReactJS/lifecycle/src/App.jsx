import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LatestAndTopJobs from './LatestAndTopJobs'

function App() {
  const [count, setCount] = useState(0)
  console.log("================>>> 1")

  useEffect(() => {
    console.log("===============>>> 3")
  }, [])

  return (
    <>
      {
        console.log("============>> 2")
      }
      <h1>HiringMine</h1>
      {/* Search Area - Hero Section */}
      {/* Latest and Top Job Openings */}
      <LatestAndTopJobs />
    </>
  )
}

export default App
