import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffectHook() {

    const [data, setdata] = useState(" ")
    const [counter, setcounter] = useState(0)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => setdata(response.data))
    }, [])

    return (
        <div>UseEffectHook <br />
            {data[counter].email ? data[counter].email : "loader"}
            <br />
            <br />
            <button onClick={() => setcounter(counter + 1)}>Change email</button>
        </div>

    )
}

export default UseEffectHook