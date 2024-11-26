import React, { useCallback, useEffect, useState, useMemo } from 'react';

// It is a HOC, that prevents a component from re-rendering 
// if the props (or values within it) have not changed.
const Counter = React.memo((props) => {
    console.log('Counter rendered : ', props.children);
    return (
        <button className='btn btn-primary' onClick={props.handleClick}>{props.children}</button>
    );
});

function MyComponent() {
    // const data = {
    //     name: "Manish"
    // };

    const [num, setNum] = useState(0);

    const data = useMemo(() => {
        return {
            name: "Manish"
        };
    }, [num]);

    useEffect(() => {
        console.log('MyComponent Effect Hook Executed');
    }, [data]);
}

const CallbackAndMemoHookDemo = () => {
    const [incrementValue, setIncrementValue] = useState(0);
    const [mulValue, setMulValue] = useState(2);

    // const increment = () => {
    //     setIncrementValue(incrementValue + 1);
    // }

    // const multiply = () => {
    //     setMulValue(mulValue * 2);
    // }

    const increment = useCallback(() => setIncrementValue(incrementValue + 1), [incrementValue]);
    const multiply = useCallback(() => setMulValue(mulValue * 2), [mulValue]);

    return (
        <>
            <h2>Callback and Memo Hook Demo</h2>
            <Counter handleClick={increment} value={incrementValue}>
                Incrementer
            </Counter>
            <hr />
            <Counter handleClick={multiply} value={mulValue}>
                Multiplier
            </Counter>
            <hr />
            <MyComponent />
        </>
    );
};

export default CallbackAndMemoHookDemo;

// const increment1 = () => {
//     return 1;
// }

// const increment2 = () => {
//     return 1;
// }