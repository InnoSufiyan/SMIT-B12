import React from 'react'

function Logo() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: '#f19720',
            width: '100vw',
            justifyContent: 'center',
            padding: '20px 0px'
        }}>
            <div style={{
                height: '20px',
                width: '20px'
            }}><img width='100%' height='100%' src="https://png.pngtree.com/png-vector/20220713/ourmid/pngtree-summer-island-png-design-png-image_5939582.png" alt="" /></div>
            <p>FarAway</p>
            <div style={{
                height: '20px',
                width: '20px'
            }}><img width='100%' height='100%' src="https://cdn-icons-png.flaticon.com/512/2664/2664675.png" alt="" /></div>
        </div>
    )
}

export default Logo