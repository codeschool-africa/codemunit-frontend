import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { loggedState } from "../../actions/index"

const Main = () => {
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div className="main-content">
            <div className="container">
                <aside>side nav</aside>
                <div className="curriculum-showcase">
                    hello there
                    {isLogged? <h1>Hello world</h1>:<div></div> }
                    <button onClick={() => dispatch(loggedState())}>click me</button>
                </div>
            </div>
        </div>
    )
}

export default Main
