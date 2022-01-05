import { useState } from "react"


interface Props {
    initialValue?:number
}

interface CounterState {
    counter:number,
    clicks:number,
}

export const CounterBy = ({ initialValue = 5 }:Props) => {
    const [{ counter, clicks }, setCounter] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    });

    const handleIncrement = (val:number) => {
        setCounter(({ clicks, counter }) => (
            { 
                clicks: clicks + 1, 
                counter: counter + val 
            }
        ));
    }

    return (
        <>
            <h1>CounterBy: { counter }</h1>
            <h1>Clicks: { clicks }</h1>

            <button onClick={ () => handleIncrement(1) }>
                +1
            </button>

            <button onClick={ () => handleIncrement(5) }>
                +5
            </button>
        </>
    )
}