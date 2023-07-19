import "../styles/todoItem.css";

export const TodoItem=(props)=>{

   return (
      <div className="todoItems">
        <input className="todoToggle" type="checkbox" checked={props.todoItem.completed}/>
        <span className="todoTitle">{props.todoItem.title}</span>
        <div className="todoAction">
           <button className="deleteTodo">Delete</button>
           <button className="updateTodo">Update</button>
        </div>
      </div>
   )
}
export default TodoItem;