export const Todo = ({ todo, toggleTask, removeTask }) => {
  return (
    <div
      key={todo.id}
      data-testid="item-todo"
      className="item-todo"
      onClick={() => toggleTask(todo.id)}
    >
      <div className={todo.complete ? "item-text strike" : "item-text"}>
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}></div>
    </div>
  );
};
