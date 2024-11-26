// "slice" is a collection of Redux reducer logic and actions for a single feature of your app

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementBy: (state, action) => {
            state.count += action.payload;
        },
        decrementBy: (state, action) => {
            state.count -= action.payload;
        },
    }
});

// The function below is called a thunk(middleware) and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = function (amount) {
//     return function (dispatch) {
//         setTimeout(() => {
//             dispatch(incrementBy(amount));
//         }, 1000);
//     }
// }

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementBy(amount));
    }, 1000);
}

export const decrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(decrementBy(amount));
    }, 1000);
}

// export const selectCount = (state) => state.counter.count;      // Selector

export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions;     // Action Creators

export default counterSlice.reducer;

// --------------------------------------------------------- Queries
// function modify(obj) {
//     // obj.name = 'Manish';        // Mutation
    
//     // Immutation
//     var newObj = {...obj};        // Cloning
//     newObj.name = 'Manish';         
// }

// Reducer
// A reducer is a pure function that takes two arguments – the current state and an action 
// – and returns the next state. The key characteristics of a reducer are that it's pure, 
// deterministic, and directly updates the state based on the action.