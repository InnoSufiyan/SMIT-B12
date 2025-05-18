import React from 'react'
import Friend from './Friend'

function FriendsList({ friendsList, setIsSelected, isSelected }) {  //array []
    //array of friends
    return (
        <>
            {
                friendsList?.map((frnd, idx) => <Friend frnd={frnd} frndIdx={idx} setIsSelected={setIsSelected} isSelected={isSelected} />)
            }
        </>
    )
}

export default FriendsList
