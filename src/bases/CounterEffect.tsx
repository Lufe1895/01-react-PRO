import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
    const [counter, setCounter] = useState<number>(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (counter < 10) return;

        const tl = gsap.timeline();

        tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' });
        tl.to(counterElement.current, { y: 0, duration: 0.8, ease: 'bounce.out' });
        
    }, [counter]);

    const handleIncrement = () => {
        setCounter(c => Math.min(c + 1, MAXIMUN_COUNT));
    }

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={ counterElement }>{ counter }</h2>

            <button onClick={ handleIncrement }>
                +1
            </button>
        </>
    )
}