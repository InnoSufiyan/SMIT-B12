import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
    return (
        <ul style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            listStyle: 'none',
            width: '100vw'
        }}>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/jobs" end>
                Jobs
            </NavLink>
            <NavLink to="/about" end>
                About
            </NavLink>
            <NavLink to="/contact" end>
                Contact
            </NavLink>
        </ul>
    )
}

export default Navbar