import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
// import v4 from "uuid"
function TodoForm({ addTodo }) {
    // const [todo,setTodo] =useState({
    //     id:"",
    //     task:"",
    //     completed:false
    // })
    const [task,setTask]=useState('')
    const [completed,setCompleted]=useState('false')
    function handleTaskInputChange(e){
        setTask(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
       
        if(task.trim()){
            
            addTodo({id:uuidv4(),task:task,completed:completed});
            setTask('');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name = "task"
                    type = "text"
                    value={ task }
                    onChange={ handleTaskInputChange }
                />
                <button type="submit">Add</button> 
            </form>
        </div>
    )
}

export default TodoForm
