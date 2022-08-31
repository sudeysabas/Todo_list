import React from 'react';
import './App.css'
import Todo from './Todo';

function TodoList({todos,taskComplete, removeTask}) {
    // const dos = todos.map(todo => (
    //     <Todo key={todo.id} id={todo.id} task= {todo.task} completed= {todo.completed}/>
    // ))
    return (
        <div style={{alignItems:'center'}} >
            <ul style={{listStyleType:'none'}}>              
                <h1>{todos.map((todo)=> (<Todo key={todo.id} id={todo.id} task= {todo.task} completed= {todo.completed} taskComplete={taskComplete} removeTask={removeTask}/>))}</h1>
            </ul>
        </div>
    );
}
export default TodoList;