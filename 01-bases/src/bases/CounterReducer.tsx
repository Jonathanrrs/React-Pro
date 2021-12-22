import { useReducer } from "react";

interface CounterState {
    counter: number;
    previuos: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 10,
    previuos: 15,
    changes: 20
}

/* no son objetos */
type CounterAction = 
    | {type: 'increaseBy', payload: {value: number}}
    | {type: 'reset'};
    

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    switch (action.type) {
        case 'reset':
            return {
                changes: 0,
                counter: 0,
                previuos: 0
            }        
    
        default:
            return state;
    }
}

export const CounterReducerComponent = () => {

    const [{counter}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleClick = () => {
        dispatch({type: 'reset'})
    }

    return (
        <>
            <h1>Counter Reducer: {counter}</h1>
            <button onClick={handleClick}>
                reset
            </button>
        </>
    )
}
