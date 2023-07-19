import '../styles/app.css';
import {useState,useEffect} from "react"
import {TodoList,TodoForm} from './index';
import { getTodoLists,postTodo } from '../api';
import { useFormInput } from "../hooks";

function App() {
  const [todoList,setTodoList]=useState([]);
  const todoTitle=useFormInput("");
  const completed=useFormInput(false);

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await getTodoLists();

      if (response.success) {
        setTodoList(response.data);
      }
    };

    fetchTodo();
  }, []);

  async function handleSubmit(e){
    // console.log("todoTitle.value=",todoTitle.value);
    // console.log("completed.value=",completed.value);
    e.preventDefault();
    const response = await postTodo({
      "userId": 1,
      "title": todoTitle.value,
      "completed": completed.value
  });

  console.log("response.data=",response.data)
      if (response.success) {
        setTodoList([response.data.content,...todoList]);
      }
  }



  return (
    <div className="App">
      <h1 className="title">Todo App</h1>
      <TodoList 
        todoList={todoList}
      />
           
      <TodoForm 
       todoTitle={todoTitle}
       completed={completed}
       onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
