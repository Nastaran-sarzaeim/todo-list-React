import React , {useState}from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

function Todo() {
const [todos, setTodos] = useState([]);
const completedTodos = todos.filter(todo => todo.done).length
const totalTodos = todos.length
  return (
    <>
      <Form todos={todos} setTodos={setTodos} totalTodos={totalTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      <Footer  completedTodos={completedTodos} totalTodos={totalTodos} />
    </>
  );
}

export default Todo;
