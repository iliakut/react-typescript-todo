import React, {useEffect} from "react";
import {Stack, Text} from "@fluentui/react";
import {useSelector} from "react-redux";
import {ItodoItem} from "../store/constants/typesTodo";
import {StoreType} from "../store/store";

const Footer = () => {
  const items: ItodoItem[] = useSelector(
    (state: StoreType) => state.todoStore.todos,
    (newItems, oldItems): boolean => {
      return newItems.length === oldItems.length;
    });

  const length = items.length;

  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        {length} items left
      </Text>
    </Stack>
  );
};

export default Footer;
