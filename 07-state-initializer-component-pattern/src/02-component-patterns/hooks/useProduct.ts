import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    /* si el initialValue es undefined toma el valor de value */
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    /* si esto es true */
    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {

        if (isControlled.current) {
            /* sin  el ! daria un warning pero esto es para que se confirme lo que estamos haciendo y lo ignore*/
            return onChange!({ count: value, product })
        }


        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        /* si tiene algo que dispare la funcion, es como un if */
        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter(value);
    }, [value])

    return {
        counter,
        increaseBy
    }

}
