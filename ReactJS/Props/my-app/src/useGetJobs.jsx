import React, { useEffect, useState } from 'react'

function useGetJobs() {

    const [jobs, setJobs] = useState([])

    const fetchData = () => {
        fetch('https://hiringmine-railway-development.up.railway.app/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res)
                setJobs(res?.data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return jobs
}

export default useGetJobs