import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({onChange, product, value = 0}: useProductArgs) => {
   
    const [counter, setCounter] = useState(value);

    /* si esto es true */
    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {

        if(isControlled.current) {
            /* sin  el ! daria un warning pero esto es para que se confirme lo que estamos haciendo y lo ignore*/
            return onChange!({count: value, product})
        }
        

        const newValue =  Math.max(counter + value, 0);
        setCounter(newValue);

        /* si tiene algo que dispare la funcion, es como un if */
        onChange && onChange({count: newValue, product});
    }

    useEffect(() => {
        setCounter(value);
    }, [value])

    return {
        counter,
        increaseBy
    }

}
