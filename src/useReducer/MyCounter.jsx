import {useReducer} from 'react';
import '../App.css';

const reducer =(state, action)=>{
   switch(action){
    case "Increment":
        return state + 1;
    case "Decrement":
        return state - 1;
    case "Reset" :
        return 0;
   }
}

function MyCounter(){
   const [state, dispatch] = useReducer(reducer, 0)
   
    const handleIncrement = () =>{
        dispatch("Increment");
    }
    const handleDecrement = () =>{
        dispatch("Decrement");
    }
    const handleReset = ()=>{
        dispatch("Reset");
    }
   return(
    <div>
        <h1>This is useReducer hook State: {state}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
   )
}

export default MyCounter