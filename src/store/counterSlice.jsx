import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
    },
    reducers: {
        increment: (state) => {
            return { counter: state.counter + 1 };
        },
        decrement: (state) => {
            return { counter: state.counter - 1 };
        },
        add: (state, action) => {
            return { counter: state.counter + action.payload };
        },
    },
});

export const { increment, decrement, add } = counterSlice.actions;

export default counterSlice.reducer;
