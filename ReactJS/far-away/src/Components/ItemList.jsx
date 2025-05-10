import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSquare, faSquareCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function ItemList({ itemsList }) {


    return (

        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            color: 'white'

        }}>
            {
                itemsList.map((item) => (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <FontAwesomeIcon icon={item.isCompleted ? faSquareCheck : faSquare} />
                        <p>{item.quantity} {item.item}</p>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList