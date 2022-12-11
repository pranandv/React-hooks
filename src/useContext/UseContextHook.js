import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext(null)

function UseContextHook() {
    const [user, setUser] = useState("user1")
    return (
        <div>
            <AppContext.Provider value={{ user, setUser }}>
                <Login />
                <User />
            </ AppContext.Provider >
        </div>
    )
}

export default UseContextHook