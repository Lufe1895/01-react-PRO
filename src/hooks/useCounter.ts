import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

export const useCounter = ({ maxCount = 1 }) => {
    const [counter, setCounter] = useState<number>(5);
    const elementToAnimate = useRef<any>(null);

    const tl = useRef(gsap.timeline());

    useLayoutEffect(() => {
        if (!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
                .to(elementToAnimate.current, { y: 0, duration: 0.8, ease: 'bounce.out' })
                .pause();
    }, []);

    useEffect(() => {
        tl.current.play(0);
    }, [counter])

    const handleIncrement = () => {
        setCounter(c => Math.min(c + 1, MAXIMUN_COUNT));
    }

    return {
        elementToAnimate,
        handleIncrement,
        counter,
    }
}