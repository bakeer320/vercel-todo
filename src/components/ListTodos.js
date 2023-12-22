import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodos = ({ onTodoDeleted }) => {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    try {
      const res = await fetch("http://localhost:5000/todos");
      const todoArray = await res.json();
      setTodos(todoArray);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  async function deleteTodo(id) {
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setTodos(todos.filter((todo) => todo.todo_id !== id));
        onTodoDeleted(); // Trigger the callback function to refresh the todo list
      } else {
        console.error("Error deleting todo:", res.statusText);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, [onTodoDeleted]); // Add onTodoDeleted as a dependency to re-run the effect when it changes

  return (
    <>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
