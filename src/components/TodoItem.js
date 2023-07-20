import "../styles/todoItem.css";

export const TodoItem=(props)=>{
       const {todoItem,onEditTodo,onDeleteTodo}=props;
       const {completed,title}=todoItem;
   return (
      <div className="todoItems">
        <input className="todoToggle" type="checkbox" checked={completed}/>
        <span className="todoTitle" >{title}</span>
        <div className="todoAction">
           <button className="editTodo" onClick = { ()=>{onEditTodo(todoItem)} }>edit</button>
           <button className="deleteTodo" onClick = { ()=>{onDeleteTodo(todoItem.id)} }>Delete</button>
        </div>
      </div>
   )
}
export default TodoItem;