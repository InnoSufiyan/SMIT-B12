import React from 'react'
import { Link } from 'react-router'

function SectionCard({ title, data }) {
    return (
        <>
            <h3>{title}</h3>
            {
                data?.map((d) => <p style={{
                    border: '2px solid black'
                }}>{title == 'Latest Jobs' ? d?.designation : title == 'Top Categories' ? d?.name : <><Link to={`/user/${d?.userName}`}>{d?.firstName} {d?.lastName}</Link></>}</p>)
            }
        </>
    )
}

export default SectionCard