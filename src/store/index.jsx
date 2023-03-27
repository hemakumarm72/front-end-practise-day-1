import { legacy_createStore } from 'redux';

const reducerFn = (state = { counter: 10 }, { type, payload } = {}) => {
    // async function
    if (type === 'INC') {
        return { counter: state.counter + 1 };
    }
    if (type === 'DEC') {
        return { counter: state.counter - 1 };
    }
    if (type === 'ADD') {
        return { counter: state.counter + payload };
    }

    return state;
};

const store = legacy_createStore(reducerFn);

export default store;
