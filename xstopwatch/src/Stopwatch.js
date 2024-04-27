import React, { useState, useRef } from 'react';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [value, setValue] = useState(0);
    const timer = useRef(null);

    const clickToggle = () => {
        if (isRunning) {
            clearInterval(timer.current);
            setIsRunning(false);
        } else {
            setIsRunning(true);
            timer.current = setInterval(() => {
                setValue(prevValue => prevValue + 1);
            }, 1000);
        }
    };

    const clickReset = () => {
        setValue(0);
        clearInterval(timer.current);
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(value)}</p>
            <button onClick={clickToggle}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={clickReset}>Reset</button>
        </div>
    );
};

export default Stopwatch;
