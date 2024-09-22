import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2024",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <hr></hr>
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
