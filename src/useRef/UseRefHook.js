import React, { useRef } from 'react'

function UseRefHook() {

    const inputRef = useRef(null)
    const clearText = () => {
        inputRef.current.value = ""
    }
    const focus = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} placeholder='text' /> <button onClick={clearText}>clearText</button> <button onClick={focus}>focus</button>
        </div>
    )
}

export default UseRefHook