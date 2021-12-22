
/* no son objetos */
export type CounterAction = 
    | {type: 'increaseBy', payload: {value: number}}
    | {type: 'reset'};