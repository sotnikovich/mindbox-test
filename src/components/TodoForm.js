import { useState } from "react";

export const TodoForm = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.currentTarget.value);
  };
  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
    </form>
  );
};
