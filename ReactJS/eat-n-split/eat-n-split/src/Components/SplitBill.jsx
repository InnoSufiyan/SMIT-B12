import React, { useEffect, useState } from 'react'

function SplitBill({ friendsList, isSelected, setFriendsList, setIsSelected }) {

    const [billValue, setBillValue] = useState('')
    const [yourExpense, setYourExpense] = useState('')
    const [frndExpense, setFrndExpense] = useState('')
    const [paidBillBy, setPaidBillBy] = useState('')

    const splitBillHandler = () => {
        console.log(billValue, yourExpense, frndExpense, paidBillBy, "==>> Bill Split hona shuru")
        const photoCopyFriendsList = [...friendsList]
        // 100
        photoCopyFriendsList[isSelected].balance = paidBillBy == 'you' ? photoCopyFriendsList[isSelected].balance + frndExpense : photoCopyFriendsList[isSelected].balance - yourExpense

        setFriendsList(photoCopyFriendsList)
        setIsSelected(undefined)
    }

    useEffect(() => {
        console.log("Split Bill area peda huwaF")

        return () => console.log("Split Bill mar raha hai")
    }, [])

    return (
        <div>
            <h2>Split Bill with {friendsList[isSelected].name}</h2>
            <div>
                <div>
                    Bill Value: <input type="text" onChange={(e) => setBillValue(e.target.value)} />
                </div>
                <div>
                    Your Expense: <input type="text" onChange={(e) => {
                        setYourExpense(e.target.value)
                        setFrndExpense(billValue - e.target.value)
                    }} />
                </div>
                <div>
                    {friendsList[isSelected].name} Expense: <input type="text" value={frndExpense} />
                </div>
                <div>
                    Who is paying the Bill: <select name="" id="" onChange={(e) => setPaidBillBy(e.target.value)}>
                        <option value="you">You</option>
                        <option value="frnd">{friendsList[isSelected].name}</option>
                    </select>
                </div>
            </div>
            <button onClick={splitBillHandler}>Split Bill</button>
        </div >
    )
}

export default SplitBill