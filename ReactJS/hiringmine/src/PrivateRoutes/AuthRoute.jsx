import React from 'react'
import { Navigate, Outlet } from 'react-router'

function AuthRoute() {
  const token = localStorage.getItem('token')
  console.log(token)

  // api call -->> token -->> res of user <<---- const res = await axios.get('user-info')

  // res.data.data.isAdmin -->> true
  return (
    // res.data.data.isAdmin ? <Outlet /> : <Navigate to="Not Accessible" />
    token ? <Outlet /> : <Navigate to="/signin" />
  )
}

export default AuthRoute