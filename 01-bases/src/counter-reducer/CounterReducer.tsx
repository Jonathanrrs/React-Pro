import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
// import { doReset, doIncreaseBy } from './actions/actions';
/* Para no tener tantas importaciones */
import * as CounterActions from './actions/actions';

const INITIAL_STATE: CounterState = {
    changes: 0,
    counter: 0,
    previuos: 0,
}

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
        // dispatch(doReset())
        dispatch(CounterActions.doReset())
    }

    const increaseBy = (value: number) => {
        // dispatch(doIncreaseBy(value))
        dispatch(CounterActions.doIncreaseBy(value))
    }

    return (
        <>
            <h1>Counter Reducer Segmentado</h1>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>
            <button onClick={() => increaseBy(1)}>
                +1
            </button>
            <button onClick={() => increaseBy(5)}>
                +5
            </button>
            <button onClick={() => increaseBy(10)}>
                +10
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    )
}
