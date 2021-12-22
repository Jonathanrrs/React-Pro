import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {gsap} from 'gsap';



export const useCounter = ({maxCount = 10}) => {

    const [counter, setCounter] = useState(5);

    const elementToAnimate = useRef<any>(null); /* any para que se acepte cualquier elemento */

    const tl = useRef(gsap.timeline());

    const handleClick = () => {
        // if(counter >= MAXIMO_COUNT) return;
        /* Es lo mismo que arriba */
        setCounter(prev => Math.min(prev + 1, maxCount) );
    }

    useLayoutEffect(() => {
        /* ya esté construido el html */

        if(!elementToAnimate.current) return;
        /* timeline para las animaciones, para no usar promesas(no se recomienda)*/
        
        /* para obtener la referencia con .current */
        tl.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'});
        tl.current.to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out'});
        tl.current.pause();
    }, [])



    /* se puede usar el useLayoutEffect, cuando se necesite que sea despues que se contruyó el html */
    useEffect(() => {
        /* cada useeffect debe tener una responsabilidad unica */
        tl.current.play(0);
    }, [counter]);

    return {
        elementToAnimate,
        counter,
        handleClick
    }
}