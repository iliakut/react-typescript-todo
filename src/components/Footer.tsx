import React, {useEffect} from "react";
import {Stack, Text} from "@fluentui/react";
import {useSelector} from "react-redux";
import {ItodoItem} from "../store/constants/typesTodo";
import {StoreType} from "../store/store";

const Footer = () => {
  const items: ItodoItem[] = useSelector(
    (state: StoreType) => state.todoStore.todos,
    (newItems, oldItems): boolean => {
      const isDifferent = oldItems.some((item, index) => {
        return item.completed !== newItems[index].completed
      });
      return (newItems.length === oldItems.length) && !isDifferent;
    });

  const length = items.filter(item => !item.completed).length;

  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        {length} items left
      </Text>
    </Stack>
  );
};

export default Footer;
