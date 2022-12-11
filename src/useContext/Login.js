import React, { useContext } from 'react'
import { AppContext } from '../useContext/UseContextHook'

function Login() {
    const { setUser } = useContext(AppContext)
    return (
        <div>
            <input onChange={(event) => {
                setUser(event.target.value)
            }} placeholder='type'></input>
        </div>
    )
}

export default Login