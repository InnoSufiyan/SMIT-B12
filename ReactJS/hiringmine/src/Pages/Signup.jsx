import axios from 'axios'
import React, { useState } from 'react'

function Signup() {

  const [userName, setUserName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")

  const signupHandler = async () => {
    console.log("===>> chala")

    if (!userName || !firstName || !lastName || !email || !password || !cPassword) return alert("Empty fields not allowed")

    const res = await axios.post('https://hiringmine-railway-development.up.railway.app/api/auth/signup', {
      cPassword: cPassword,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      userName: userName
    })

    console.log(res, "==>>>> res")
  }
  const userNameAvailableHandler = async (un) => {
    if (un.length >= 3) {
      try {
        const res = await axios.get(`https://hiringmine-railway-development.up.railway.app/api/auth/check-username/${un}`)

        if (res.data.status) {
          setUserName(un)
        } else {
          setUserName("")
        }

      } catch (error) {

      }
    } else {
      setUserName("")
    }
  }

  return (
    <>
      <h1>Signup Form</h1>
      <p>UserName</p>
      <input type="text" onChange={(e) => userNameAvailableHandler(e.target.value)} />
      <p>FirstName</p>
      <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      <p>LastName</p>
      <input type="text" onChange={(e) => setLastName(e.target.value)} />
      <p>Email Address</p>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <p>Password</p>
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <p>Confirm Password</p>
      <input type="text" onChange={(e) => setCPassword(e.target.value)} />
      <button onClick={signupHandler}>Submit</button>
    </>
  )
}

export default Signup