import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className="app">
        <h1 className="heading">To Do List</h1>
        <ToDoForm />
        <ToDosList />
      </div>
    </div>
  );
}

export default App;
