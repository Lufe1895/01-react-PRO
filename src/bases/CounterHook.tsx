import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
    const { counter, elementToAnimate, handleIncrement} = useCounter({ maxCount:15 });

    return (
        <>
            <h1>CounterHook:</h1>
            <h2 ref={ elementToAnimate }>{ counter }</h2>

            <button onClick={ handleIncrement }>
                +1
            </button>
        </>
    )
}