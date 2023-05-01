import { useState } from "react";
import { NewTodoForm } from "./Form/NewTodoForm";
import { TodoList } from "./Items/TodoList";
import { DoneTodoList } from "./DoneTodos/DoneTodoList";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  function addTodo(todoContent) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), todoContent, completed: false },
      ];
    });
    console.log(todos);
    console.log(doneTodos);
  }

  function toggleTodoHandler(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
        //When the if block condition is not met,
        //this ensures that all other todo items that
        //do not match the id remain unchange in the todos state
        //teststststs
      });
    });
    
    //Add item to doneTodo
    setDoneTodos((currentDoneTodos) => {
      const duplicate = todos.find((todo) => todo.id === id);
      if (completed) {
        const updatedDuplicate = { ...duplicate, completed: true}
        return [...currentDoneTodos, updatedDuplicate]; //refers to the array contained inside the state
      }
    });
  }

  function toggleDoneTodoHandler(id, completed) {
    setDoneTodos((currentDoneTodos) => {
      return currentDoneTodos.filter((todo) => todo.id !== id);
    });

    setTodos((currentDoneTodos) => {
      return currentDoneTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }; //Refers to the individual todo item object
        }
        return todo; 
        //When the if block condition is not met,
        //this ensures that all other todo items that
        //do not match the id remain unchange in the todos state
      });
    });
  }

  function deleteTodoHandler(id) {
    setTodos((currentTodos) => {
      //returns an array containing items that are "not equal" to the current id
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function deleteDoneTodoHandler(id) {
    setDoneTodos((currentDoneTodos) => {
      return currentDoneTodos.filter((todo) => todo.id !== id);
    });

    setTodos((currentDoneTodos) => {
      return currentDoneTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodoHandler}
        deleteTodo={deleteTodoHandler}
      />
      {doneTodos.length > 0 && <h1 className="header">Completed Tasks</h1>} 
      <DoneTodoList
        doneTodos={doneTodos}
        deleteTodo={deleteDoneTodoHandler}
        toggleTodo={toggleDoneTodoHandler}
      />
    </>
  );
}
