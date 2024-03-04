import React, { useState } from "react";
import styles from "./form.module.css";

function FormTodo({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false, id: 0 });

  function submitTodo(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false, id: new Date().toISOString() });
  }
  return (
    <>
      <form className={styles.form} onSubmit={submitTodo}>
        <div className={styles.container}>
          <input
            className={styles.input}
            placeholder="Add a new todo..."
            onChange={(e) =>
              setTodo({
                name: e.target.value,
                done: false,
                id: new Date().toISOString(),
              })
            }
            type="text"
            value={todo.name}
          />
          <button className={styles.btn} type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default FormTodo;
