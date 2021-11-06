const ToDosList = ({
    todos
}) => {
    return (
        <ul>
            {todos.map(x => <li key={x.id}>{x.task}</li>)}
        </ul>
    )
}

export default ToDosList;