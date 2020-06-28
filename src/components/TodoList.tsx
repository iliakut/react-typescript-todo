import React from "react";
import {Stack} from "@fluentui/react";
import TodoListItem from "./TodoListItem";
import {useSelector} from "react-redux";
import {StoreType} from "../store/store";
import {ItodoItem} from "../store/constants/actionTypesTodo";

const TodoList = () => {
  const items: ItodoItem[] = useSelector((state: StoreType) => state.todoStore.todos);

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {items.map(item => (
        <TodoListItem
          key={item.id}
          id={item.id}
          label={item.label}
        />
      ))}
    </Stack>
  );
};

export default TodoList;
