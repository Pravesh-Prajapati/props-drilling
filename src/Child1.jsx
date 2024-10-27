import React from 'react'
import Child2 from './Child2'

function Child1({ userData }) {
    return (
        <>
            <div className="level level-2">
                <div className="level-title">Child Component (Level 2)</div>
                <div>Receiving and passing user data down...</div>
                <Child2 userData={userData} />
            </div>
        </>
    )
}

export default Child1