import './App.css';
import { useState, useEffect} from 'react';
// import { v4 as uuidv4} from 'uuid';

// import Home from './components/Home'
// import Navbar from'./components/Navbar'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY ="todo-list-todos";
function App() {
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    const storageTodos =JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageTodos){
      setTodos(storageTodos);
      console.log('local...')
    }
  },[])
  useEffect(()=>{
    window.localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
    console.log('local...  plus')
  },[todos])
  function addTodo(todo){
    setTodos([todo,...todos]);
  }
  function taskComplete(id){
    setTodos(todos.map(todo=>{
      if(todo.id === id){
        return {...todo,completed:!todo.completed}
      }
      return todo;
    }))
  }
  function removeTask(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoForm addTodo={ addTodo }/>
      <TodoList todos={todos} taskComplete={taskComplete} removeTask={removeTask}/>
      {/* <Navbar />
      <Home /> */}
    </div>
  );
}

export default App;
