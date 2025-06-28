import React from 'react'
import useFetchHook from '../CustomComponent/useFetchHook'
import { Link } from 'react-router'

function Jobs() {

    const jobs = useFetchHook('https://hiringmine-railway-development.up.railway.app/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')

    return (
        <>
            <div>Jobs</div>
            {
                jobs?.map((j) => <Link to={`/jobPage/${j?._id}`}><p>{j?.designation}</p></Link>)
            }
        </>
    )
}

export default Jobs