import React,{useState} from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";

const Todos = (props) =>
{

    const [ todos, setTodos ] = useState(
       [
        { name: 'Bangla 4 Credit' , id: Math.random().toString()},
        { name: 'English 4 Credit' , id: Math.random().toString()},
        { name: 'Math 3 Credit' , id: Math.random().toString()},
       ]
    );
    
    const [ errorMessage, setErrorMessage ] = useState('');

    const [ isMessageShowClasss, setIsMessageShowClass ] = useState('fade');



    const todoList =  todos.map( (todo ) => {
        return <TodoList name={todo.name} key={todo.id}></TodoList>;
    });

    const formHandler = ( courseName ) => 
    {
        setErrorMessage("Course Length Can Not Be Empty");
        if( courseName.length == 0){
            setIsMessageShowClass('show');
        }else{
        
            setIsMessageShowClass('fade');
            setTodos((prevState) =>{
                return [...prevState,{ name: courseName, id: Math.random().toString() }]
            })
    }
    }


    const errorMessageHandler = ()=>{
        setIsMessageShowClass('fade');

    }

return(
    <div >
    <div className={'alert alert-warning alert-dismissible '+ isMessageShowClasss} role="alert">
        <strong>{errorMessage}</strong>
        <button type="button" className="btn-close" onClick={errorMessageHandler} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

        <AddTodo formHandler={formHandler}></AddTodo>
        {todoList}
    </div>
);

}

export default Todos;