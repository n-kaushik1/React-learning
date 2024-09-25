import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todoItems-store";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className={styles.itemscont}>
        {todoItems.map((item) => (
          <TodoItem
            key={item}
            todoDate={item.dueDate}
            todoName={item.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
