// import { counterActions } from './counter-actions';
// import { useCounter } from './counter-context';

// const CounterSibling = (props) => {
//     const context = useCounter();

//     return (
//         <>
//             <div className="text-center">
//                 <h3 className="text-info">Counter Sibling Component</h3>
//             </div>
//             <div className="d-grid gap-2 mx-auto col-6">
//                 <input type="text" className="form-control form-control-lg" value={context.counterState.count} readOnly />
//                 <button className="btn btn-info"
//                     onClick={() => { context.counterDispatch({ type: counterActions.increment, payload: props.interval }); }}>
//                     <span className='fs-4'>+</span>
//                 </button>
//                 <button className="btn btn-info"
//                     onClick={() => { context.counterDispatch({ type: counterActions.decrement, payload: props.interval }); }}>
//                     <span className='fs-4'>-</span>
//                 </button>
//             </div>
//         </>
//     );
// }

// CounterSibling.defaultProps = {
//     interval: 1
// };

// export default CounterSibling;

// ------------------------------------------------------------

import { useCounter } from './counter-context';

const CounterSibling = (props) => {
    const context = useCounter();

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Sibling Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={context.counterState.count} readOnly />
                <button className="btn btn-info"
                    onClick={() => { context.setCounter({ count: context.counterState.count + props.interval }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={() => { context.setCounter({ count: context.counterState.count - props.interval }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

CounterSibling.defaultProps = {
    interval: 1
};

export default CounterSibling;