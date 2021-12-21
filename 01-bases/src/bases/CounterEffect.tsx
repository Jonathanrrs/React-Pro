import { useEffect, useState } from "react"


const MAXIMO_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);

    const handleClick = () => {
        // if(counter >= MAXIMO_COUNT) return;
        /* Es lo mismo que arriba */
        setCounter(prev => Math.min(prev + 1, MAXIMO_COUNT) );
    }

    useEffect(() => {
       
        if(counter < 10) return;

        console.log('%cSe llegó al valor máximo', 'color: red; background-color: black;');
        
       
    }, [counter])

    return (
        <>
            <h1>CounterEffect: {counter}</h1>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}
