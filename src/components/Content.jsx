import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';

const Content = () => {
    const dispatch = useDispatch();

    return (
        <div className='btn-group btn-group-lg' role='group'>
            <button className='btn btn-danger' onClick={() => dispatch(decrement())}>-</button>
            <button className='btn btn-primary' onClick={() => dispatch(increment())}>+</button>
        </div>
    );
}

export default Content;
