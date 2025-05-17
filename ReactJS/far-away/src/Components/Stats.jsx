import React from 'react'

function Stats({ itemsList }) {

  const completedItems = () => {
    const onlyCompletedItems = itemsList?.filter((item) => item.isCompleted)
    console.log(onlyCompletedItems.length, "==>> onlyComplete")
    return onlyCompletedItems?.length || 0
  }

  const number = 10
  const percent = completedItems() ? completedItems() / itemsList?.length * 100 : '0'


  return (
    <h3 style={{
      backgroundColor: 'orange',
      height: '70px',
      textAlign: 'center'
    }}>We have in total {itemsList?.length} of items, and {percent} percent are packed</h3>
  )
}

export default Stats