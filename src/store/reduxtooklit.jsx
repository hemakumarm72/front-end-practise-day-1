import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
    },
    reducers: {
        increment(state) {
            return { counter: state.counter + 1 };
        },
        decrement(state) {
            return { counter: state.counter - 1 };
        },
        add(state) {
            return { counter: state.counter + 10 };
        },
    },
});

export const { actions } = counterSlice;
const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store;
