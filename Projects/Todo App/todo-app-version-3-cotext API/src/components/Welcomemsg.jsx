import { useContext } from "react";
import styles from "./welcome.module.css";
import { TodoItemsContext } from "../store/todoItems-store";

const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};

export default WelcomeMessage;
