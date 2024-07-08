import React, { useState } from 'react'

function User() {
    const [count, setCount] = useState(0)
    const incressValue=()=>{
        setCount(count+1)
    }
    return (
        <>
            <h1>counter</h1>
            <button onClick={incressValue}></button>
            <h2>{count}</h2>
        </>
    )
}

export default User;