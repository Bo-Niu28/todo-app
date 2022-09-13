import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [isAdding, setIsAdding] = useState(false);

  const todoAdding = () => {
    setIsAdding(!isAdding);
  };
  return (
    <TodoProvider>
      <div className="App">
        <div className="container__app">
          <Header />
          <div className="card card__white">
            <TodoList />
            <button className="btn btn__submit" onClick={todoAdding}>
              + New Task
            </button>
          </div>
          {isAdding && <TodoForm onAdd={todoAdding} />}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
