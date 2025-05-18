import React from 'react'

function Recipe({ recipe }) {
    const { image_url, title } = recipe
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: "20px"
        }}>
            <img width={100} height={100} src={image_url} alt="" />
            <h4>{title}</h4>
        </div>
    )
}

export default Recipe