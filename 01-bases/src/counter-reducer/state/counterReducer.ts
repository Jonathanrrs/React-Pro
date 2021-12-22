import { CounterAction } from '../actions/actions';
import { CounterState } from '../interfaces/interfaces';

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    
    const {changes, counter} = state;
  

    switch (action.type) {
        case 'reset':
            return {
                changes: 0,
                counter: 0,
                previuos: 0
            }        
        case 'increaseBy': 
            return {
                changes: changes + 1,
                counter: counter + action.payload.value,
                previuos: counter,
            }
        default:
            return state;
    }
}