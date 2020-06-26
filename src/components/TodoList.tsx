import React from "react";
import { Stack } from "@fluentui/react";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  return (
    <Stack gap={10}>
      {[1, 2, 3].map(id => (
        <TodoListItem key={id} id={id} />
      ))}
    </Stack>
  );
};

export default TodoList;
