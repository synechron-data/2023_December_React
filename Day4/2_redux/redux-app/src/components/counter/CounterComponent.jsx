import React from 'react';
import styles from './CounterComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, decrementAsync, decrementBy, increment, incrementAsync, incrementBy } from '../../features/counter/counterSlice';

const CounterComponent = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-center">
                <h1 className="text-primary">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <h2 className="text-primary text-center">
                    Current Count: {count}
                </h2>
                <hr />
                <h3 className="text-center">Increment / Decrement By 1</h3>
                <button className="btn btn-info" onClick={() => { dispatch(increment()); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info" onClick={() => { dispatch(decrement()); }} >
                    <span className='fs-4'>-</span>
                </button>
                <hr />
                <h3 className="text-center">Increment / Decrement By Interval</h3>
                <button className="btn btn-success" onClick={() => { dispatch(incrementBy(5)); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-success" onClick={() => { dispatch(decrementBy(5)); }} >
                    <span className='fs-4'>-</span>
                </button>
                <hr />
                <h3 className="text-center">Increment / Decrement By Interval Async</h3>
                <button className={`${styles.asyncButton} btn btn-warning`} onClick={() => { dispatch(incrementAsync(10)); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className={`${styles.asyncButton} btn btn-warning`} onClick={() => { dispatch(decrementAsync(10)); }} >
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
};

export default CounterComponent;