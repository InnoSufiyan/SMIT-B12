import { useEffect, useState } from "react"

export const myJobsFetchFunction = () => {
    const [jobs, setJobs] = useState([])

    if(true) {
        const [name, setName] = useState("sufiyan")

        console.log(name, "==>> name")
    }

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