import React,{useState} from 'react'
import '../Hooks.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const handleIncrement = () =>{
      setCount(count + step);
    };

    const handleDecrement = () =>{
    setCount(count - step);
    };

    const handleReset = () =>{
      setCount(0);
    };
    

  return (
    <div className='container state-container'>
      <h1>useState Hook Count</h1>
      <p className="count-value">Count:<span>{count}</span></p>

      <div>
        <label>
        Step:
            <input className='input' type='number' value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
        </label>' 
      </div>
      <div className='grid-three-cols '>
      <button className="btn" onClick={handleIncrement} disabled={count >= 100}>Increment</button>
      <button className="btn" onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
       <button className="btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}


export default Counter
