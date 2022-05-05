
const AddTodo = ( props ) =>
{

    

return(

    <div>
      <form onSubmit={props.formHandler}>
      <div className="mb-3">
            <label className="form-label">Add Course Name</label>
            <input type="text" className="form-control"  placeholder="Course Name"/>
        </div>
        <div className="mb-3">
            <input type="submit" value="Add New "/>
        </div>

      </form>
     
    </div>

);

}

export default AddTodo;