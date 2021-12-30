import { useState } from 'react';

export const useProduct = (onChange?: () => void) => {
   
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0));

        /* si tiene algo que dispare la funcion, es como un if */
        onChange && onChange();
    }

    return {
        counter,
        increaseBy
    }

}
