import { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoForm({ setIsAdding }) {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      const newTodo = { task: text, isComplete: false };
      addTodo(newTodo);
      setIsAdding(false);
      setText("");
    } else {
      setMessage("Please add a task!");
    }
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <div className="input-group card card__white">
        <input
          type="text"
          placeholder="Add task here"
          onChange={handleTextChange}
          value={text}
        />
        <button className="btn" type="submit">
          Add Task
        </button>
        {text.length === 0 && <p>{message}</p>}
      </div>
    </form>
  );
}

export default TodoForm;
