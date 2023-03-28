import { createSlice } from '@reduxjs/toolkit';
// import { Slide, toast } from 'react-toastify';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
    },
    reducers: {
        increment: (state) => {
            // toast.success('ddd', {
            //     autoClose: 2000,
            //     transition: Slide,
            // });
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
