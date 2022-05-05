
import React,{useState} from "react";

const AddTodo = ( props ) =>
{
  const [courseName, setcourseName] = useState(''); // '' is the initial state value

  const courseChangeHandler = (event) =>{

    setcourseName((prevState)=>{
            return  event.target.value;   
        })

  }
  

  const formHandler = ( event ) => 
  {
      event.preventDefault();
      props.formHandler(courseName);
  }

return(

    <div>
      <form onSubmit={formHandler}>
      <div className="mb-3">
            <label className="form-label">Add Course Name</label>
            <input type="text" onChange={courseChangeHandler} className="form-control"  placeholder="Course Name"/>
        </div>
        <div className="mb-3">
            <input type="submit" value="Add New "/>
        </div>

      </form>
     
    </div>

);

}

export default AddTodo;