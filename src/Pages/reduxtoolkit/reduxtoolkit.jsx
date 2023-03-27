import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, add } from 'store/counterSlice';

const reduxtoolkit = () => {
    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();
    const increments = () => {
        dispatch(increment());
    };
    const decrements = () => {
        dispatch(decrement());
    };
    const Add = () => {
        dispatch(add(10));
    };

    return (
        <div>
            <h1>react tookit</h1>
            <h1>Counter {counter}</h1>

            <button type="button" onClick={increments}>
                Increment
            </button>

            <button type="button" onClick={decrements}>
                decrement
            </button>

            <button type="button" onClick={Add}>
                Add by 10
            </button>
        </div>
    );
};

export default reduxtoolkit;
