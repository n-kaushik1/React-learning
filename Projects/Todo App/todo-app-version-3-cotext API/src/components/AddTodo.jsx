import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItems-store";

function AddTodo() {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  const dateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row newrow" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success mybutton">
            Add.
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
