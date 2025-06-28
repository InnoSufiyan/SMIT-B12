import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Button'
import { EkComponent } from './EkComponent'

function App() {

  const [screen, setScreen] = useState(0)

  let count = 0

  const motivationJumlon = [
    'Learn React',
    'Get a Job, and earn new Income',
    'Invest your new Income'
  ]

  console.log("abdullah")

  console.log(count, "===>> count on chowk")

  const previousHandler = () => {
    console.log("====>>previousHandler")

    if (screen == 0) {
      setScreen(2)
    } else {
      setScreen(screen - 1)
    }
  }
  const nextHandler = () => {
    console.log("====>>nextHandler")
    count++
    console.log(count, "===>> count in next handler")
    if (screen == motivationJumlon.length - 1) {
      setScreen(0)
    } else {                                    //screen
      setScreen((s) => s + 1) // 0 + 1 ==>> 1
      setScreen((s) => s + 1) // 1 + 1 ==>> 2
    }
  }

  console.log("===>>> Sufiyan 1")

  useEffect(() => {

    console.log("==>> nahaeyga")
    console.log("==>> kuch khaeyga")
    console.log("==>> Office jaeyga")

    // cleanup function
    return () => {
      console.log("===>> cleanup function")
    }

  })


  return (
    <>
      {/* <EkComponent /> */}
      {console.log("===>> Sufiyan 2")}
      <div className='circleArea'>
        <div className='circle' style={{
          backgroundColor: screen >= 0 ? 'blue' : 'white',
          color: screen >= 0 ? 'white' : 'black'
        }}>1</div>
        <div className='circle' style={{
          backgroundColor: screen >= 1 ? 'blue' : 'white',
          color: screen >= 1 ? 'white' : 'black'
        }}>2</div>
        <div className='circle' style={{
          backgroundColor: screen >= 2 ? 'blue' : 'white',
          color: screen >= 2 ? 'white' : 'black'
        }}>3</div>
      </div>
      <div>
        <p>{motivationJumlon[screen]}</p>
      </div>
      <div className='buttonArea'>
        <button onClick={previousHandler}>Previous</button>
        <button className={screen == 2 ? 'disableBtn' : ''} onClick={nextHandler}>Next</button>
      </div>
    </>
  )
}

export default App
