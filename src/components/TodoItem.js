import "../styles/todoItem.css";

export const TodoItem=(props)=>{

   return (
      <div className="todoItems">
        <input className="todoToggle" type="checkbox" checked={props.todoItem.completed}/>
        <span className="todoContent">{props.todoItem.todo}</span>
        <div className="todoAction">
           <button className="deleteTodo">Delete</button>
           <button className="updateTodo">Update</button>
        </div>
      </div>
   )
}
export default TodoItem;