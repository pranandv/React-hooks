import React, { useContext } from 'react'
import { AppContext } from '../useContext/UseContextHook'

function User() {
    const { user } = useContext(AppContext)
    return (
        <div>User: {user}</div>
    )
}

export default User