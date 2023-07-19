import "../styles/todoForm.css"
 const TodoForm=(props)=>{
    
    return(
        <form className="todoForm">
             <div className="toggleFields">
                 <label>Completed:</label>
                 <input {...props.completed} className="todoToggle" type="checkbox" />
             </div>
             <input {...props.todoTitle} className="todoContent" type="text" placeholder="Type your todo here...." />
             <button onClick={props.onSubmit} className="submitTodo">Post/Add Todo</button>
        </form>
    )
}

export default TodoForm;