import React, { useState } from 'react'

function Form({ setItemList, itemsList }) {

  const [inputValue, setInputValue] = useState('')
  const [quantity, setQuantity] = useState()

  const itemAddHandler = () => {
    console.log(setItemList, "==>> setItemList")
    console.log(quantity, inputValue, "===>> item will be added")
    //itemsList --->> itemsList.push(inputValue)
    console.log(itemsList, "===>> itemsList")
    const photoCopyItemsList = [...itemsList]
    photoCopyItemsList.push({
      item: inputValue,
      quantity,
      isCompleted: false
    })
    setItemList(photoCopyItemsList)
  }


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#df6b1b',
      padding: '20px'
    }}>
      <p>What do you need for your trip??</p>
      <select name="" id="" onChange={(e) => setQuantity(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <input type="text" placeholder='kya chahiye' onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={itemAddHandler}>Add</button>
    </div>
  )
}

export default Form