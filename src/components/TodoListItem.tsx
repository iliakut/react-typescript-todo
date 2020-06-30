import React, {useState} from "react";
import { Stack, Checkbox, IconButton, TextField, DefaultButton } from "@fluentui/react";
import {useDispatch, useSelector} from "react-redux";
import {onDeleteTodoItem, onEditLabelTodo, setCompletedTodoItem} from "../store/actions/todoActions";
import {ItodoItem} from "../store/constants/typesTodo";

const TodoListItem = ({id, label, completed}: ItodoItem) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<string>('');

  const onClickEdit = (): void => {
    setNewValue(label);
    setEditing(true);
  };

  const onChangeNewValue =  (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
    if (newValue) {
      setNewValue(newValue);
    }
  };

  const onSave = (): void => {
    dispatch(onEditLabelTodo(id, newValue));
    setEditing(false);
    setNewValue('');
  };

  const onClickDelete = (): void => {
    dispatch(onDeleteTodoItem(id));
  };

  return (
    <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
      {!editing && (
        <React.Fragment>
          <Checkbox label={label} checked={completed} onChange={() => dispatch(setCompletedTodoItem(id, !completed))} />
          <div>
            <IconButton iconProps={{ iconName: 'Edit' }} onClick={onClickEdit} />
            <IconButton iconProps={{ iconName: 'Cancel' }} onClick={onClickDelete} />
          </div>
        </React.Fragment>
      )}

      {editing && (
        <Stack.Item grow>
          <Stack horizontal tokens={{ childrenGap: 10 }}>
            <Stack.Item grow>
              <TextField value={newValue} onChange={onChangeNewValue} />
            </Stack.Item>
            <DefaultButton onClick={onSave}>Save</DefaultButton>
          </Stack>
        </Stack.Item>
      )}
    </Stack>
  );
};

export default React.memo(TodoListItem);
