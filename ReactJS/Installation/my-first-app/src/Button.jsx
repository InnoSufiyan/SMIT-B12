import React from 'react'

const Button = ({ color, text }) => {
    return (
        <button style={{
            backgroundColor: color,
            color: 'white'
        }}>{text}</button>
    )
}

export default Button