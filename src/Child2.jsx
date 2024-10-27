import React from 'react'
// import Child3 from './Child3'

function Child2({ userData }) {
    return (
        <>
            <div className="level level-3">
                <div className="level-title">Grandchild Component (Level 3)</div>
                <div>Finally using the data:</div>
                <div className="user-data">
                    <div>Name: {userData.name}</div>
                    <div>Age: {userData.age}</div>
                    <div>City: {userData.city}</div>
                </div>
            </div>
        </>
    )
}

export default Child2