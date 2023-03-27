import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const reduxdemo = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch({ type: 'INC' });
    };
    const decrement = () => {
        dispatch({ type: 'DEC' });
    };
    const Add = () => {
        dispatch({ type: 'ADD', payload: 10 });
    };

    return (
        <div>
            <h1>Counter {counter}</h1>
            <button type="button" onClick={increment}>
                Increment
            </button>
            <button type="button" onClick={decrement}>
                decrement
            </button>
            <button type="button" onClick={Add}>
                Add by 10
            </button>
        </div>
    );
};

export default reduxdemo;
