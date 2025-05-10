import React from 'react'
import { Button } from './Button'

function DusraComponent({buttonsData}) {
    return (
        <>
            <Button text={buttonsData[0]} />
            <Button text={buttonsData[1]} />
            <Button  text={buttonsData[2]} />
        </>
    )
}

export default DusraComponent