import { TodoItem } from "./TodoItem";
import "../styles/todoList.css"
const TodoList=(props)=>{

    return(
        <div className="todoList">{
                props.todoList.map((todoItem)=>(
                  <TodoItem 
                     todoItem={todoItem}
                     onEditTodo={props.onEditTodo}
                     onDeleteTodo={props.onDeleteTodo}
                 />
                ))   
            }
       </div>
    )
}

export default TodoList;