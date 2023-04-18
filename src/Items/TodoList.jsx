import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  return (
    <ul className="list">
      {props.todos.length === 0 && "Add Todos"}
      {props.todos
        .filter((todo) => !todo.completed) //Ignores checked item
        .map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            todoContent={todo.todoContent}
            toggleTodo={props.toggleTodo}
            deleteTodo={props.deleteTodo}
          />
        ))}
    </ul>
  );
}
