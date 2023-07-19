import '../styles/app.css';
import {useState,useEffect} from "react"
import {TodoList,TodoForm} from './index';
import { getTodoLists } from '../api';


function App() {
  const [todoList,setTodoList]=useState([]);


  useEffect(() => {
    const fetchTodo = async () => {
      const response = await getTodoLists();

      if (response.success) {
        setTodoList(response.data);
      }
    };

    fetchTodo();
  }, []);


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
