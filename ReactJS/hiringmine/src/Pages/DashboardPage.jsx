import React, { useEffect } from 'react'
import { useParams } from "react-router";
import useFetchHook from '../CustomComponent/useFetchHook';

function DashboardPage() {
    let { userName } = useParams();

    const details = useFetchHook(`https://hiringmine-railway-development.up.railway.app/api/users/${userName}`)

    return (
        <>
            <div>{userName}</div>
            <p >{details?.firstName} {details?.lastName}</p>
            <p >{details?.email}</p>
            <p >{details?.city} {details?.country}</p>
            <p>{details?.jobTitle}</p>
            <img src={details?.profilePic}/>
        </>
    )
}

export default UserPage