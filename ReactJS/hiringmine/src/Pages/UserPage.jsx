import React, { useEffect } from 'react'
import { useParams, useSearchParams } from "react-router";
import useFetchHook from '../CustomComponent/useFetchHook';

function UserPage() {
    let { userName } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();

    const keyWord = searchParams.get('keyword')
    const experience = searchParams.get('experience')
    const dateposted = searchParams.get('dateposted')

    console.log(keyWord,
        experience,
        dateposted, "==>> searchParams")

    const details = useFetchHook(`https://hiringmine-railway-development.up.railway.app/api/users/${userName}`)

    return (
        <>
            <div>{userName}</div>
            <p >{details?.firstName} {details?.lastName}</p>
            <p >{details?.email}</p>
            <p >{details?.city} {details?.country}</p>
            <p>{details?.jobTitle}</p>
            <img src={details?.profilePic} />
        </>
    )
}

export default UserPage