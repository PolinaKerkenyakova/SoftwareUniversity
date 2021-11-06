import { useState } from 'react';

import ToDoForm from './components/ToDoForm';
import ToDosList from './components/ToDosList';

import './App.css';

let initialTodos = [
  { task: 'Wash the dirty dishes', id: 'id1' },
  { task: 'Laundry', id: 'id2' },
];

function App() {

  const [todos, setNewToDo] = useState(initialTodos);

  const getToDoValueHandler = (todo) => {
    const newTodo = { task: todo, id: Math.random() }
    setNewToDo(prevState => [...prevState, newTodo]);
  }

  return (
    <div className="app-wrapper">
      <div className="app">
        <h1 className="heading">To Do List</h1>
        <ToDoForm onGetToDoValue={getToDoValueHandler} />
        <ToDosList todos={todos} />
      </div>
    </div>
  );
}

export default App;
