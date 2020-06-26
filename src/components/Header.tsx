import React from "react";
import { Stack, Text, TextField, PrimaryButton, Pivot, PivotItem  } from "@fluentui/react";

const Header: React.FC = () => {
  return (
    <Stack gap={10}>
      <Stack horizontal horizontalAlign="center">
        <Text variant="xxLarge">Todo list</Text>
      </Stack>

      <Stack horizontal gap={10}>
        <Stack.Item grow>
          <TextField
            placeholder="What needs to be done?"
          />
        </Stack.Item>
        <PrimaryButton>Add</PrimaryButton>
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
