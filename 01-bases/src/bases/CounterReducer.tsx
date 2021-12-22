import { useReducer } from "react";

interface CounterState {
    counter: number;
    previuos: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previuos: 0,
    changes: 0
}



export const CounterReducerComponent = () => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    const handleClick = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <>
            <h1>Counter Recucer: {counter}</h1>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}
