import React, { useEffect, useState } from 'react'
import useFetchHook from '../CustomComponent/useFetchHook'
import SectionCard from '../Component/SectionCard'

function Home() {

    const jobs = useFetchHook('https://hiringmine-railway-development.up.railway.app/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')
    const categories = useFetchHook('https://hiringmine-railway-development.up.railway.app/api/categories/all')
    const users = useFetchHook('https://hiringmine-railway-development.up.railway.app/api/users/home?sortBy=mostViewed')


    return (
        <>
            <h1>HiringMine Home Page</h1>

            <SectionCard title= 'Latest Jobs' data ={jobs}/>
            <SectionCard title= 'Top Categories' data ={categories}/>
            <SectionCard title= 'Top Users' data ={users}/>
        </>
    )
}

export default Home