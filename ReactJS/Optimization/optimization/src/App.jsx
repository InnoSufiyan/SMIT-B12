import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'

function App() {

  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState('Sufiyan')

  // const obj = {}

  const obj = useMemo(() => {
    return []
  }, [])

  const calculateSalary = useCallback(() => {
    return 10
  }, [])


  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> Click to update Count</button>
      <button onClick={() => setFirstName("Zain")}> Click to update Name</button>
      <Comp1 firstName={firstName} obj={obj} calculateSalary={calculateSalary} />
      <Comp2 />
    </>
  )
}

export default App
