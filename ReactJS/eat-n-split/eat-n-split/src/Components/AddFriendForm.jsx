import React, { useState } from 'react'

function AddFriendForm({ friendsList, setFriendsList }) {

    const [openForm, setOpenForm] = useState(false)
    const [friendName, setFriendName] = useState('')
    const [friendImage, setFriendImage] = useState('')

    const addFriendHandler = () => {

        const photoCopyFriendsList = [...friendsList]
        photoCopyFriendsList.push(
            {
                name: friendName,
                imgUrl: friendImage,
                balance: 0
            }
        )
        setFriendsList(photoCopyFriendsList)
        setFriendName('')
        setFriendImage('')
        setOpenForm(false)
    }


    return (
        <>
            {
                !openForm && <button onClick={() => setOpenForm(!openForm)}>Add Friend</button>
            }
            {
                openForm && <div>
                    <div>
                        <p>Friend's Name</p>
                        <input onChange={(e) => setFriendName(e.target.value)} type="text" />
                    </div>
                    <div>
                        <p>Friend's Image</p>
                        <input onChange={(e) => setFriendImage(e.target.value)} type="text" />
                    </div>
                    <button onClick={addFriendHandler}>Add Friend</button>
                </div>
            }
        </>
    )
}

export default AddFriendForm