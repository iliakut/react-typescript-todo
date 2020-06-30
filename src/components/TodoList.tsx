import React from "react";
import {Stack} from "@fluentui/react";
import TodoListItem from "./TodoListItem";
import {useSelector} from "react-redux";
import {StoreType} from "../store/store";
import {ItodoItem} from "../store/constants/typesTodo";
import {FilterTypes} from "../store/constants/typesFilter";

const TodoList = () => {
  const items: ItodoItem[] = useSelector((state: StoreType) => state.todoStore.todos);
  const filter: FilterTypes = useSelector((state: StoreType) => state.filterStore.filter);

  const filteredItems = items.filter(item => {
    if (filter === 'active') {
      return !item.completed;
    } else if (filter === 'completed') {
      return item.completed
    }
    return true;
  });

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {filteredItems.map(item => (
        <TodoListItem
          key={item.id}
          id={item.id}
          label={item.label}
          completed={item.completed}
        />
      ))}
    </Stack>
  );
};

export default TodoList;
