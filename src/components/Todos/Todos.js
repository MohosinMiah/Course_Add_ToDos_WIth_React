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


    const todoList =  todos.map( (todo ) => {
        return <TodoList name={todo.name} key={todo.id}></TodoList>;
    });

    const formHandler = ( event ) => 
    {
        event.preventDefault();
        console.log("Form Submitted");
    }

return(
    <div >
        <AddTodo formHandler={formHandler}></AddTodo>
        {todoList}
    </div>
);

}

export default Todos;