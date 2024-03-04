import React from "react";
import TodoItem from "./TodoItem";

function TodList({todos ,setTodos}) {
  return (
    <>
      {todos.map((item) => (
        <TodoItem item={item} todos={todos} setTodos={setTodos} key={item.id} />
      ))}
    </>
  );
}

export default TodList;
