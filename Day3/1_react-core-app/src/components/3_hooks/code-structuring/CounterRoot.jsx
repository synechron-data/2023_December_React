import React from 'react';
import { CounterProvider } from './counter-context';
import Counter from './Counter';
import CounterSibling from './CounterSibling';

const CounterRoot = () => {
    return (
        <CounterProvider>
            <Counter />
            <hr />
            <CounterSibling />
        </CounterProvider>
    );
};

export default CounterRoot;