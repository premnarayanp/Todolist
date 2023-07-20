import '../styles/app.css';
import {useState,useEffect} from "react"
import {TodoList,TodoForm} from './index';
import { getTodoLists,postTodo,updateTodo,deleteTodo } from '../api';
import { useFormInput,useFormInputChecked } from "../hooks";

function App() {
  const [todoList,setTodoList]=useState([]);
  const [updateDisabled,setUpdateDisabled]=useState(false);
  const [currentTodoItem,setCurrentTodoItem]=useState({});
  // const [itemId,setItemId]=useState("");;

  const todoTitle=useFormInput("");
  const completed=useFormInputChecked(false);

  useEffect(() => {
    //fetchTodo.......
    const fetchTodo = async () => {
      const response = await getTodoLists();
      if (response.success) {
        setTodoList(response.data);
      }
    };

    fetchTodo();
  }, []);

  //postTodo .....
  async function handleSubmit(e){
    e.preventDefault();
    const response = await postTodo({
      "userId": 1,
      "title": todoTitle.value,
      "completed": completed.checked
  });
      if (response.success) {
        const data=response.data.content;
              data.id=response.data.id;
        setTodoList([data,...todoList]);
        // Reset Form after successfully update
        todoTitle.onChange({target:{value:""}});
        completed.onChange({target:{checked:false}});
      }
  }

  //EditTodo set title and completed value in form for update
  async function handleEditTodo(todoItem){
    todoTitle.onChange({target:{value:todoItem.title}});
    completed.onChange({target:{checked:todoItem.completed}});
    setUpdateDisabled(true);
    setCurrentTodoItem(todoItem);
    //setItemId(todoItem.id);
  }

  //UpdateTodo ........
  async function handleUpdateTodo(e){
    e.preventDefault();
    const response = await updateTodo(currentTodoItem.id,{
      "userId": 1,
      "id":currentTodoItem.id,
      "title": todoTitle.value,
      "completed":completed.checked
  });

      if (response.success) {
        const index=todoList.indexOf(currentTodoItem);
        const data=response.data.content;

        todoList[index].userId=data.userId;
        todoList[index].title=data.title;
        todoList[index].id=data.id;
        todoList[index].completed=data.completed;
        setTodoList([...todoList]);

        // Reset Form after successfully update
        todoTitle.onChange({target:{value:""}});
        completed.onChange({target:{checked:false}});
      }
      setUpdateDisabled(false);
  }

  //Delete TodoItems .....
  async function handleDeleteTodo(id){
    const response = await deleteTodo(id);
      if (response.success) {
        const newTodoList=todoList.filter((item)=>item.id!==id);
        setTodoList([...newTodoList]);
        setUpdateDisabled(false);
      }
  }


  return (
    <div className="App">
      <h2 className="title">Todo App</h2>
      <TodoList 
        todoList={todoList}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
           
      <TodoForm 
       todoTitle={todoTitle}
       completed={completed}
       updateDisabled={updateDisabled}
       onSubmit={handleSubmit}
       onUpdate={handleUpdateTodo}
      />
    </div>
  );
}

export default App;
