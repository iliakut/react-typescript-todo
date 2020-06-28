import React, {useState} from "react";
import { Stack, Checkbox, IconButton, TextField, DefaultButton } from "@fluentui/react";
import {useDispatch} from "react-redux";
import {onEditLabelTodo} from "../store/actions/todoActions";

interface ITodoListItem {
  id: number
  label: string
}

const TodoListItem = ({id, label}: ITodoListItem) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<string>('');

  const onClickEdit = (): void => {
    console.log(999)
  };

  const onSave = (): void => {
    dispatch(onEditLabelTodo(id, 'adsa'));
  };

  return (
    <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
      {!editing && (
        <React.Fragment>
          <Checkbox label={label} checked={true} onChange={() => console.log(11)} />
          <div>
            <IconButton iconProps={{ iconName: 'Edit' }} onClick={onClickEdit} />
            <IconButton iconProps={{ iconName: 'Cancel' }} onClick={() => console.log(123)} />
          </div>
        </React.Fragment>
      )}

      {editing && (
        <Stack.Item grow>
          <Stack horizontal gap={10}>
            <Stack.Item grow>
              <TextField value={label} onChange={() => console.log(123)} />
            </Stack.Item>
            <DefaultButton onClick={onSave}>Save</DefaultButton>
          </Stack>
        </Stack.Item>
      )}
    </Stack>
  );
};

export default TodoListItem;
