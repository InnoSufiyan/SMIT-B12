import React, { useEffect, useState } from 'react'

function useFetchHook(url) {
    const [state, setState] = useState([])
    // const [jobs, setJobs] = useState([])
    // const [categories, setCategories] = useState([])

    const fetchData = async () => {
        console.log(url, "==>> url")
        try {
            const res = await fetch(url)

            const resJson = await res.json()

            console.log(resJson, "==>> resJson")
            setState(resJson?.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return state
}

export default useFetchHook