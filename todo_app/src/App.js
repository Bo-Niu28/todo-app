import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <div className="container__app">
          <div className="card card__purple">
            <Header />
          </div>{" "}
          <div className="card card__white">
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
