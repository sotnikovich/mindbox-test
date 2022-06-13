import { useState } from "react";
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (input) => {
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      task: input,
      complete: false,
    };
    setTodos([...todos, newItem]);
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  const clearAll = () => {
    setTodos([...todos.filter((todo) => !todo.complete)]);
  };
  return (
    <div className="App">
      <header>
        <h1>todos</h1>
      </header>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            removeTask={removeTask}
            toggleTask={handleToggle}
          />
        );
      })}
      <footer>
        <div className="footer__content">
          <span>{todos.length} items left</span>
          <button data-testid="btn" onClick={() => clearAll(...todos)}>
            Clear complited
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
