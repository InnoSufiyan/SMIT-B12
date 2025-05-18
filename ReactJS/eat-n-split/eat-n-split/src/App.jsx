import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FriendsList from './Components/FriendsList'
import AddFriendForm from './Components/AddFriendForm'
import SplitBill from './Components/SplitBill'

function App() {
  const [friendsList, setFriendsList] = useState([
    { name: 'Abdullah', imgUrl: 'https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg', balance: 100 },
    { name: 'Zain', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s', balance: 50 },
    { name: 'Hanzala', imgUrl: 'https://photos.peopleimages.com/picture/202307/2709813-black-man-business-and-selfie-with-a-smile-on-face-of-an-influencer-person-at-work.-portrait-of-an-african-guy-or-entrepreneur-with-job-satisfaction-and-pride-for-social-media-profile-picture-update-fit_400_400.jpg', balance: -10 }
  ])

  const [isSelected, setIsSelected] = useState(undefined) //0,1,2,3,4

  return (
    <div style={{
      display: 'flex'
    }}>
      <div>
        <FriendsList friendsList={friendsList} setIsSelected={setIsSelected} isSelected={isSelected} />
        <AddFriendForm friendsList={friendsList} setFriendsList={setFriendsList} />
      </div>
      {
        (!isNaN(isSelected) && isSelected >= 0) && <SplitBill friendsList={friendsList} isSelected={isSelected} setFriendsList={setFriendsList} setIsSelected={setIsSelected} />
      }
    </div>
  )
}

export default App
