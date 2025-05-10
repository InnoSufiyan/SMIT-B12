import React from 'react'
import ItemList from './ItemList'

function PackagingList() {

  const itemsList = [
    {
      item: 'Luggage',
      quantity: 2,
      isCompleted: false
    },
    {
      item: 'ehraam',
      quantity: 2,
      isCompleted: false
    },
    {
      item: 'slippers',
      quantity: 2,
      isCompleted: true
    },
    {
      item: 'hand cary',
      quantity: 2,
      isCompleted: true
    },
    {
      item: 'passport',
      quantity: 2,
      isCompleted: false
    },
    {
      item: 'visa',
      quantity: 2,
      isCompleted: false
    }]

  return (
    <div style={{
      backgroundColor: '#4c3423',
      height: '300px',
      padding: '50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <ItemList itemsList={itemsList} />
      <div id='buttons' style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center'
      }}>
        <select name="" id="">
          <option value="">Sort by Input Order</option>
          <option value="">Sort by Description</option>
          <option value="">Sort by Packed Order</option>
        </select>
        <button>Clear List</button>
      </div>
    </div>
  )
}

export default PackagingList