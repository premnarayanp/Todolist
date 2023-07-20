import "../styles/todoForm.css"
 const TodoForm=(props)=>{
    const {completed,todoTitle,onSubmit,onUpdate,updateDisabled}=props;
    return(
        <form className="todoForm">
             <div className="toggleFields">
                 <label>Completed:</label>
                 <input {...completed} className="todoToggle" type="checkbox" />
             </div>
             <input {...todoTitle}  className="todoContent" type="text" placeholder="Type your todo here...." />
             <div className="todoAction">
                <button onClick={onSubmit} disabled={updateDisabled} className="submitTodo">Post</button>
                <button onClick={onUpdate} disabled={!updateDisabled} className="updateTodo">Update</button>
             </div> 
        </form>
    )
}

export default TodoForm;