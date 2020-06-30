import React from "react";
import {Stack, Text} from "@fluentui/react";
import {useSelector} from "react-redux";
import {ItodoItem} from "../store/constants/typesTodo";
import {StoreType} from "../store/store";

const Footer = () => {
  const items: ItodoItem[] = useSelector((state: StoreType) => state.todoStore.todos);

  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        3 items left
      </Text>
    </Stack>
  );
};

export default Footer;
