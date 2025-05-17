import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSquare, faSquareCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function ItemList({ itemsList, setItemList }) {

    const checkHandler = (idx) => {
        console.log(idx, 'check laga do ya hata do')
        const photoCopyItemsList = [...itemsList]
        if (photoCopyItemsList[idx].isCompleted) {
            photoCopyItemsList[idx].isCompleted = false
        } else {
            photoCopyItemsList[idx].isCompleted = true
        }
        setItemList(photoCopyItemsList)
    }

    const deleteHandler = (idx) => {
        const photoCopyItemsList = [...itemsList]
        const deletedItemsList = photoCopyItemsList.filter((item, i) => i != idx)
        setItemList(deletedItemsList)
    }

    return (

        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            color: 'white'

        }}>
            {
                itemsList.map((item, idx) => (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <FontAwesomeIcon style={{
                            cursor: 'pointer'
                        }} onClick={() => checkHandler(idx)} icon={item.isCompleted ? faSquareCheck : faSquare} />
                        <p style={{
                            textDecoration: item?.isCompleted ? 'line-through' : 'none'
                        }}>{item.quantity} {item.item}</p>
                        <FontAwesomeIcon style={{
                            cursor: 'pointer'
                        }} onClick={() => deleteHandler(idx)} icon={faXmark} />
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList