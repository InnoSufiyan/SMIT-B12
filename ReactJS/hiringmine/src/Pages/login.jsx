import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Signin() {

  const navigate = useNavigate()

  const [userName, setUserName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")

  const signinHandler = async () => {
    console.log("===>> chala")

    if (!email || !password) return alert("Empty fields not allowed")

    try {
      const res = await axios.post('https://hiringmine-railway-development.up.railway.app/api/auth/login', {
        email: email,
        password: password
      })

      console.log(res, "==>>>> res")



      if (res.data.status) {
        // localstorage save token
        localStorage.setItem("token", res.data.token)
        navigate('/')
      }
    } catch (error) {
      alert("Invalid Credentials")
    }

  }

  return (
    <>
      <h1>Signin Form</h1>
      <p>Email Address</p>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <p>Password</p>
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signinHandler}>Submit</button>
    </>
  )
}

export default Signin