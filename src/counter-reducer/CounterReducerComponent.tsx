import { useReducer } from "react";

interface CounterState {
    counter: number,
    previuos: number,
    changes: number,
}

const INITIAL_STATE:CounterState = {
    counter: 0,
    previuos: 0,
    changes: 0,
}

type CounterAction = 
    | { type: 'increaseBy', payload: { value:number } }
    | { type: 'reset' }

const counterReducer = (state:CounterState, action:CounterAction):CounterState => {
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

export const CounterReducerComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch({ type: 'reset' });
    }

    const handleIncrease = (value:number) => {
        dispatch({ type: 'increaseBy', payload: { value } });
    }

    return (
        <>
            <h1>Counter Reducer: { state.counter }</h1>
            <pre>{ JSON.stringify(state) }</pre>

            <button onClick={ () => handleIncrease(1) }>
                +1
            </button>
            <button onClick={ () => handleIncrease(5) }>
                +5
            </button>
            <button onClick={ () => handleIncrease(10) }>
                +10
            </button>
            <button onClick={ handleReset }>
                Reset
            </button>
        </>
    )
}