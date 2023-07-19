import "../styles/todoForm.css"
 const TodoForm=(props)=>{
    
    return(
        <form className="todoForm">
             <div className="toggleFields">
                 <label for="toggleBtn">Completed:</label>
                 <input id="toggleBtn" className="todoToggle" type="checkbox" />
             </div>
             <input  className="todoContent" type="text" placeholder="Type your todo here...." />
             <button className="submitTodo">Post/Add Todo</button>
        </form>
    )
}

export default TodoForm;