import React, { useReducer, createContext, useContext } from 'react';

const CounterState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
        case counterActions.increment:
            return { count: state.count + action.payload };
        case counterActions.decrement:
            return { count: state.count - action.payload };
        default:
            return state;
    }
}

const counterActions = {
    increment: 'increment',
    decrement: 'decrement',
}

const Counter = (props) => {
    const context = useContext(CounterContext);

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={context.counterState.count} readOnly />
                <button className="btn btn-info"
                    onClick={() => { context.counterDispatch({ type: counterActions.increment, payload: props.interval }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={() => { context.counterDispatch({ type: counterActions.decrement, payload: props.interval }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

Counter.defaultProps = {
    interval: 1
};

const CounterSibling = (props) => {
    const context = useContext(CounterContext);

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Sibling Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={context.counterState.count} readOnly />
                <button className="btn btn-info"
                    onClick={() => { context.counterDispatch({ type: counterActions.increment, payload: props.interval }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={() => { context.counterDispatch({ type: counterActions.decrement, payload: props.interval }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

CounterSibling.defaultProps = {
    interval: 1
};

const CounterContext = createContext();

const ContextHookDemo = () => {
    const [state, dispatch] = useReducer(counterReducer, CounterState);
    return (
        <CounterContext.Provider value={{ counterState: state, counterDispatch: dispatch }}>
            <Counter />
            <br />
            <CounterSibling />
        </CounterContext.Provider>
    );
};

export default ContextHookDemo;