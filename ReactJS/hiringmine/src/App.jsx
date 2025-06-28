import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Component/Navbar'
import {
  Route,
  Routes,
} from "react-router";
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Settings from './Pages/Settings'
import Theme from './Pages/Theme'
import UserComponent from './Pages/UserComponent'
import Jobs from './Pages/Jobs'
import Contact from './Pages/Contact'
import JobPage from './Pages/JobPage'
import UserPage from './Pages/UserPage'
import Signup from './Pages/Signup'
import Signin from './Pages/login'
import AuthRoute from './PrivateRoutes/AuthRoute'

function App() {



  return (
    <>
      <Navbar />
      <Routes>

        {/* Public */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="jobPage/:jobId" element={<JobPage />} />
        <Route path="user/:userName" element={<UserPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />

        {/* Private Route */}
        <Route element={<AuthRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="jobposting" element={<JobPosting />} /> */}
        </Route>

        {/* Admin Route */}
        {/* <Route element={<AdminRoute />}>
          <Route path='admin' element={AdminPage} />
          <Route path='deleteUsers' element={DeleteUsers} />
        </Route> */}

        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
