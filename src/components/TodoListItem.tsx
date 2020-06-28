import React from "react";
import { Stack, Checkbox, IconButton, TextField, DefaultButton } from "@fluentui/react";

interface ITodoListItem {
  id: number
  label: string
}

const TodoListItem = ({label}: ITodoListItem) => {
  const editing: boolean = false;
  return (
    <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
      {!editing && (
        <React.Fragment>
          <Checkbox label={label} checked={true} onChange={() => console.log(123)} />
          <div>
            <IconButton iconProps={{ iconName: 'Edit' }} onClick={() => console.log(123)} />
            <IconButton iconProps={{ iconName: 'Cancel' }} onClick={() => console.log(123)} />
          </div>
        </React.Fragment>
      )}

      {editing && (
        <Stack.Item grow>
          <Stack horizontal gap={10}>
            <Stack.Item grow>
              <TextField value={'label 2'} onChange={() => console.log(123)} />
            </Stack.Item>
            <DefaultButton onClick={() => console.log(123)}>Save</DefaultButton>
          </Stack>
        </Stack.Item>
      )}
    </Stack>
  );
};

export default TodoListItem;
