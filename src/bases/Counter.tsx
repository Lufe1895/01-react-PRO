import { useState } from "react"

interface Props {
    initialValue?:number
}

export const Counter = ({ initialValue = 0 }:Props) => {
    const [counter, setCounter] = useState<number>(initialValue);

    const handleIncrement = () => {
        setCounter(c => c + 1);
    }

    return (
        <>
            <h1>Counter: { counter }</h1>

            <button onClick={ handleIncrement }>
                +1
            </button>
        </>
    )
}