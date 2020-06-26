import React from "react";
import { Stack, Text, DefaultButton  } from "@fluentui/react";

const Footer = () => {
  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        3 items left
      </Text>
      <DefaultButton onClick={() => console.log(1)}>Clear Completed</DefaultButton>
    </Stack>
  );
};

export default Footer;
