import React from 'react'

function Form() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#df6b1b',
      padding: '20px'
    }}>
      <p>What do you need for your trip??</p>
      <select name="" id="">
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
      <input type="text" placeholder='kya chahiye' />
      <button>Add</button>
    </div>
  )
}

export default Form