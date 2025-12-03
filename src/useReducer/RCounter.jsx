import React, { useReducer } from 'react'

const initialState = {count: 0}
function reducer(state, action){
    switch(action.type){
       case "Increment":
        return {count: state.count + 1}
         case "Decrement":
        return {count: state.count - 1}
         case "RESET":
        return {count: 0}

        default:
            return state;
    }

}

const RCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter:{state.count}</h1>
      <button onClick={()=> dispatch({type:"Increment"})}>Increment</button>
      <button onClick={()=> dispatch({type:"Decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>

    </div>
  )
}

export default RCounter
