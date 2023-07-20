import "../styles/todoItem.css";

export const TodoItem=(props)=>{
       const {todoItem,onEditTodo}=props;
       const {completed,title}=todoItem;
   return (
      <div className="todoItems">
        <input className="todoToggle" type="checkbox" checked={completed}/>
        <input className="todoTitle" value={title} type="text"/>
        <div className="todoAction">
           <button className="editTodo" onClick = { ()=>{onEditTodo(todoItem)} }>edit</button>
           <button className="deleteTodo">Delete</button>
        </div>
      </div>
   )
}
export default TodoItem;