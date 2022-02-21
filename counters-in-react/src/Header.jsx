import React from 'react';
import App from './App';


function Headers (props){
    return(
        <div>
            <h1>React Counters</h1>
            <button onClick={props.addCounter}>+</button>
            <button onClick ={props.minusCounter}>-</button>
        </div>
    )
}
export default Headers