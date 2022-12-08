import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + 1, showText: state.showText }
        case "toggleText":
            return { counter: state.counter, showText: !state.showText }
        default:
            return state
    }
}

function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer, { counter: 0, showText: true })
    return (
        <div>
            {state.counter} <button onClick={() => { dispatch({ type: "INCREMENT" }); dispatch({ type: "toggleText" }) }}>increment</button>
            <br />
            <br />
            {state.showText && "show text"}
        </div>
    )
}
export default UseReducerHook