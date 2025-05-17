import React from 'react'
import ItemList from './ItemList'

function PackagingList({ itemsList, setItemList }) {



  return (
    <div style={{
      backgroundColor: '#4c3423',
      height: '300px',
      padding: '50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      {
        itemsList?.length ? <ItemList itemsList={itemsList} setItemList={setItemList} /> : <h3 style={{
          textAlign: 'center',
          color: 'white'
        }}>No Items Selected</h3>
      }
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