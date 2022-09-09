import {
  MdOutlineDeleteOutline,
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
} from "react-icons/md";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoItem({ item }) {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo__item">
      {item.isComplete ? (
        <MdRadioButtonChecked
          className="todo__item--check"
          onClick={() => toggleTodo(item.id)}
        />
      ) : (
        <MdRadioButtonUnchecked
          className="todo__item--check"
          onClick={() => toggleTodo(item.id)}
        />
      )}
      <div
        className={`todo__item--task ${
          item.isComplete ? "todo__item--complete" : ""
        }`}
        onClick={() => toggleTodo(item.id)}
      >
        {item.task}
      </div>
      <MdOutlineDeleteOutline
        className="todo__item--del"
        size={25}
        onClick={() => deleteTodo(item.id)}
      />
    </div>
  );
}

export default TodoItem;
