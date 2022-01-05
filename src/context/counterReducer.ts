import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (state:CounterState, action:CounterAction):CounterState => {
    switch (action.type) {
        case 'increaseBy':
            return {
                previuos: state.counter,
                counter: state.counter + action.payload.value,
                changes: state.changes + 1,
            };
        case 'reset':
            return {
                previuos: 0,
                counter: 0,
                changes: 0,
            };
        default:
            return state;
    }
}