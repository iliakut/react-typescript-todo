import React from "react";
import {Stack, Text} from "@fluentui/react";
import useItemsLength from "../hooks/useItemsLength";

const Footer = () => {
  const length = useItemsLength();

  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        {length} items left
      </Text>
    </Stack>
  );
};

export default Footer;
