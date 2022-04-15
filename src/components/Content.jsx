import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';

const Content = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
}

export default Content;
