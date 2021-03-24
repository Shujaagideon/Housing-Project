import React,{useRef, useEffect} from 'react'
import {Wrapp} from '../../styles/common'

const SmoothScroll = ({children}) => {
    let current = 0;
    let target = 0;
    let ease = 0.3;
    const transition = { duration: 0.6, ease:[0.43, 0.13, 0.23, 0.96]}
    useEffect(() => {
        Animation()
    })
    const Wrapper = useRef(null);

    const Lerp = (start, end, speed) => {
        return start * (1 - speed) + end * speed;
    }

    const Animation = () => {
        let refHeight = Wrapper.current.getBoundingClientRect().height
        document.body.style.height = `${refHeight+20}px`;
        current = Lerp(current, target, ease);
        current = parseFloat(current.toFixed(2));
        target = window.scrollY;

        Wrapper.current.style.transform = `translate3D(0, ${- current}px, 0)`
        requestAnimationFrame(Animation);
    }

    return (
        <Wrapp ref={Wrapper} initial='initial' animate='animate' exit='exit' transition={transition}>
            {children}
        </Wrapp>
    )
}

export default SmoothScroll
