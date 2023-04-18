// import { useState } from "react";
import { DoneTodoItem } from "./DoneTodoItem";

export function DoneTodoList(props) {
  return (
    <ul className="list">
      {/* {props.doneTodos.length === 0 && "Start Working!"} */}
      {props.doneTodos.map((todo) => {
        return (
          <DoneTodoItem
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            todoContent={todo.todoContent}
            toggleTodo={props.toggleTodo}
            deleteTodo={props.deleteTodo}
          />
        );
      })}
    </ul>
  );
}
