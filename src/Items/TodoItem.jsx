export function TodoItem(props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={props.completed} //Current status of the todo
          onChange={(e) => props.toggleTodo(props.id, e.target.checked)}
        />
        {props.todoContent}
      </label>
      <button
        onClick={(e) => props.deleteTodo(props.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
