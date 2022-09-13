import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: "Clearn home and wash the car",
      isComplete: true,
    },
    {
      id: 2,
      task: "Clearn home and wash the car",
      isComplete: false,
    },
    {
      id: 3,
      task: "Clearn home and wash the car",
      isComplete: true,
    },
  ]);

  const toggleTodo = (id) => {
    const complete = todoList.map((item) => {
      if (item.id === id) {
        const status = !item.isComplete;
        return { ...item, isComplete: status };
      }
      return item;
    });

    setTodoList(complete);
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
    console.log(id);
  };

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    setTodoList([newTodo, ...todoList]);
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        toggleTodo,
        deleteTodo,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
