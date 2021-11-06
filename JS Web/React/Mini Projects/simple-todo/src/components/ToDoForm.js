import { useState } from 'react';
import './ToDoForm.css'

const ToDoForm = ({
    onGetToDoValue
}) => {

    const [input, setInput] = useState('');

    const addNewToDoHandler = (e) => {
        e.preventDefault();
        onGetToDoValue(e.target.todo.value);
        setInput('');
    }

    const getInputHandler = (e) => {
        setInput(e.target.value);
    }


    return (
        <form onSubmit={addNewToDoHandler}>
            <label className="form-label" htmlFor="new-todo">Add new todo</label>
            <input type="text" name="todo" id="new-toto" placeholder="Go shopping" className="todo-input" onChange={getInputHandler} value={input} />
            <button className="add-button">Add</button>
        </form>
    )
}


export default ToDoForm;