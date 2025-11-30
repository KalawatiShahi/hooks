import {useState} from 'react';
import './MyButton.css'
function MyButton(){
    const [date, setDate] = useState("CLick me");
     
    const handleDate =()=>{
        setInterval(()=>{
          setDate(new Date().toLocaleTimeString());
        }, 1000);
      
    }

    return(
        <div>
            <h1>Date</h1>
            <button onClick={handleDate}>{date}</button>
        </div>
    )
}

export default MyButton;