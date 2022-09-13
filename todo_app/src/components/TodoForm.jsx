function TodoForm({ onAdd }) {
  return (
    <form className="todo__form">
      <div className="input-group card card__white">
        <input type="text" placeholder="Add task here" />
        <button className="btn">Add Task</button>
      </div>
    </form>
  );
}

export default TodoForm;
