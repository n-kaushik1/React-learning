import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todoItems-store";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container ">
      <div className="row newrow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger mybutton"
            onClick={() => deleteItem(todoName)}
          >
            Delete <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
