import { useEffect, useRef, useState } from "react";
import {gsap} from 'gsap';

const MAXIMO_COUNT = 10;

export const useCounter = () => {

    const [counter, setCounter] = useState(5);

    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        // if(counter >= MAXIMO_COUNT) return;
        /* Es lo mismo que arriba */
        setCounter(prev => Math.min(prev + 1, MAXIMO_COUNT) );
    }

    /* se puede usar el useLayoutEffect, cuando se necesite que sea despues que se contruyó el html */
    useEffect(() => {
       
        if(counter < 10) return;

        console.log('%cSe llegó al valor máximo', 'color: red; background-color: black;');

        /* timeline para las animaciones, para no usar promesas(no se recomienda)*/
        const tl = gsap.timeline();

        /* para obtener la referencia con .current */
        tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'});
        tl.to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'});

      
       
    }, [counter]);

    return {
        counterElement,
        counter,
        handleClick
    }
}