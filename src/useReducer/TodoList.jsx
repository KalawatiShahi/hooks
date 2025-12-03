import { useReducer, useState } from "react";

const initialState = [];

function reducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        { id: Date.now(), text: action.payload, completed: false }
      ];

    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);

    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return todos;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
              onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
