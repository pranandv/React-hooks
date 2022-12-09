import React, { useEffect, useLayoutEffect } from 'react'

function UseLayoutEffectHook() {
    
    useLayoutEffect(() => {
        console.log("use layout effect call")
    }, [])

    useEffect(() => {
        console.log("use effect call")
    }, [])

    return (
        <div>UseLayoutEffectHook
            <br />
            <br />
            view on console
        </div>
    )
}

export default UseLayoutEffectHook