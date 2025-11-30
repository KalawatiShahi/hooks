import { createContext, useState } from "react";

import Child from "./Child";
export const EmpContext = createContext();

function Parent (){
  const [emp, setEmp] = useState({id:101, name:"amit", salary:45000});
  return(

    <div>
    <h1>This is Parent Component</h1>
    <EmpContext.Provider value ={emp}>
        <Child/>
    </EmpContext.Provider>
    </div>
  )
}

export default Parent;