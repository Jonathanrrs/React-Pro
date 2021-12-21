import { useState } from "react"

interface Props {
    initialValue?: number /* para que sea opcional y ya no es obligatorio mandarla como props */
}


export const Counter = ({initialValue = 0}: Props) => {

    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}
