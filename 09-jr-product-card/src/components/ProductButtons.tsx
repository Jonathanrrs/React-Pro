import React, { useContext, CSSProperties, useCallback } from 'react';

import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({className, style}:Props) => {

    const {counter, increaseBy, maxCount} = useContext(ProductContext);
    
    
    // const isMaxReached = useCallback(
    //     () => {
    //         if(counter === maxCount) {
    //             return true;
    //         } else return false;
    //     },
    //     [counter, maxCount],
    // )
    const isMaxReached = useCallback(
        /* sino existe maxcount rgresa un booleano y no sigue la funcion, y si existe compara los valores y regresa true o false */
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )

    // console.log(isMaxReached());
    

    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                -</button>
            <div className={styles.countLabel}>{counter}</div>

            <button
                /*  si es true la funcion lo ejecuta sino no */
                className={`${styles.buttonAdd}  ${ isMaxReached() && styles.disable}`}
                // className={isMaxReached() ? `${styles.buttonAdd}  ${styles.disable}` : `${styles.buttonAdd}`}
                onClick={() => increaseBy(+1)}
            >
                +</button>
        </div>
    );
}