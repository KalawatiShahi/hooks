import {useContext} from 'react';
import {EmpContext} from './Parent';


function SubChild(){

  const emp = useContext(EmpContext);

  return(
      <div>
        <h1>This is SubChild Component</h1>
        Employee Id:<b>{emp.id}</b>
        <br/>
        Employee Name:<b>{emp.name}</b>
        <br/>
        Employee Salary:<b>{emp.salary}</b>
      </div>
  )
}

export default SubChild;