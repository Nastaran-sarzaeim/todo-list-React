import React from "react";
import styles from "./todoItem.module.css";

function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function doneTodo(item) {
    const newTodos = todos.map((todo) =>
      todo.name === item ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  }
  const completed = item.done ? styles.completed : "";
  return (
    <>
      <div className={styles.items}>
        <div className={styles.item}>
          <span className={completed} onClick={() => doneTodo(item.name)}>
            {item.name}
          </span>
          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.delete}
            >
              X
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
