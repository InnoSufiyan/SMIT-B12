import React, { useState } from 'react'

function Friend({ frnd, frndIdx, setIsSelected, isSelected }) {  //name, imgUrl, balance

    const selectFrndHandler = () => {
        console.log(frndIdx, "==> frndIdx")
        setIsSelected(frndIdx)
    }

    const closeFrndHandler = () => {
        setIsSelected(undefined)
    }



    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden'
            }}>
                <img style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }} src={frnd?.imgUrl} alt="" />
            </div>
            <div>
                <h3>{frnd?.name}</h3>
                <h3>{Math.abs(frnd?.balance)} rupey {frnd?.balance > 0 ? 'lenay' : 'denay'} hain</h3>
            </div>
            <button onClick={frndIdx == isSelected ? closeFrndHandler : selectFrndHandler}>{frndIdx == isSelected ? 'Close' : 'Select'}</button>
        </div>
    )
}

export default Friend