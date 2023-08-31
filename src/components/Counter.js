import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/counterActions";

const Counter = () =>{
    const count = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
    )
}

export default Counter;