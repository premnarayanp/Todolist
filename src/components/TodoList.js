import { TodoItem } from "./TodoItem";

const TodoList=(props)=>{
    props.todoList.map((todoItem)=>{
        return <TodoItem 
                   todoItem={todoItem}  
                />
    });
}

export default TodoList;