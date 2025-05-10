import React from 'react'

const Button = ({ color, text, callAdnanFatta, ZainComponent }) => {
    console.log(ZainComponent, "===>> component")
    return (
        <>
            {/* <Undefined />  */}
            {/* <ZainComponent />  */}
            <button onClick={callAdnanFatta} style={{
                backgroundColor: color,
                color: 'white'
            }}>{text}</button>
        </>
    )
}

export default Button