import { useReducer } from "react";
import { doIncreaseBy, doReset } from "../actions/actions";
import { counterReducer } from "../context/counterReducer";
import { CounterState } from "../interfaces/interfaces";

const INITIAL_STATE:CounterState = {
    counter: 0,
    previuos: 0,
    changes: 0,
}

export const CounterReducerComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch(doReset());
    }

    const handleIncrease = (value:number) => {
        dispatch(doIncreaseBy(value));
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