
/* no son objetos */
export type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' };


/* se recomienda ponerles "do" */
// export const doReset = (): CounterAction => {
//     return {
//         type: 'reset'
//     }
// }

/* return implicito */
export const doReset = (): CounterAction => ({
    type: 'reset'
});

export const doIncreaseBy = (value: number): CounterAction => ({
    type: 'increaseBy',
    payload: { value }
})