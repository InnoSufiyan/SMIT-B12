import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './Components/Logo'
import Form from './Components/Form'
import PackagingList from './Components/PackagingList'
import Stats from './Components/Stats'

function App() {
  const [itemsList, setItemList] = useState([])

  console.log(itemsList, "===>> itemsList")

  return (
    <>
      <Logo />
      <Form setItemList={setItemList} itemsList={itemsList} />
      <PackagingList itemsList={itemsList} setItemList={setItemList} />
      <Stats itemsList={itemsList} />
    </>
  )
}

export default App
