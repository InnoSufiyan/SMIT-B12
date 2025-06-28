import React, { useEffect, useRef, useState } from 'react'
import useGetJobs from './useGetJobs'
import { myJobsFetchFunction } from './utils/myFUnctions'

function App2() {

    const getJobs = useGetJobs()

    const myJobs = myJobsFetchFunction()

    console.log(myJobs, "==>> myJobs")

    console.log(getJobs, "==>> getJobs")

    if(true) {
        const [name, setName] = useState("sufiyan")

        console.log(name, "==>> name")
    }

    return (
        <>
            {console.log(getJobs)}
            <h1>
                {getJobs?.length && getJobs[0].designation}
            </h1>
        </>
    )
}

export default App2