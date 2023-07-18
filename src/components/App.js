import '../styles/app.css';
import {useState} from "react"
import {TodoList,TodoForm} from './index';

// const todoJsonData=[
//   {id:1,completed:true,todo:"my react skill test-1"},
//   {id:2,completed:false,todo:"my react skill test-2"},
// ]

function App() {
  const [todoList,setTodoList]=useState([{}]);
  return (
    <div className="App">
      <h1 className="title">Todo App</h1>
      <TodoList 
        todoList={todoList}
      />

      <TodoForm 
         
      />
    </div>
  );
}

export default App;
