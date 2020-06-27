import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Stack, Text, TextField, PrimaryButton, Pivot, PivotItem} from "@fluentui/react";
import {onAddTodo} from '../store/actions/todoActions'
import {ItodoItem} from "../store/constants/actionTypesTodo";

const Header: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();

  const onAddTodoItem = (): void => {
    const newItem: ItodoItem = {
      id: Date.now(),
      label: value,
    };
    dispatch(onAddTodo(newItem))
  };

  const onChangeInput = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <Stack tokens={{ childrenGap: 5 }}>
      <Stack horizontal horizontalAlign="center">
        <Text variant="xxLarge">Todo list</Text>
      </Stack>

      <Stack horizontal tokens={{ childrenGap: 10 }}>
        <Stack.Item grow>
          <TextField
            value={value}
            onChange={onChangeInput}
            placeholder="What needs to be done?"
          />
        </Stack.Item>
        <PrimaryButton onClick={onAddTodoItem}>Add</PrimaryButton>
      </Stack>

      <Pivot>
        <PivotItem headerText="all" />
        <PivotItem headerText="active" />
        <PivotItem headerText="completed" />
      </Pivot>
    </Stack>
  );
};

export default Header;
