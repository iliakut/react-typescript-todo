import React from "react";
import {PrimaryButton, Stack, Text} from "@fluentui/react";
import useItemsLength from "../hooks/useItemsLength";
import {onRemoveCompletedThunk, testAsync} from "../store/actions/todoActions";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../store/store";

const Footer = () => {
  const dispatch = useDispatch();
  const length = useItemsLength();

  // test async action
  dispatch(testAsync(length));
  const testName = useSelector((state: StoreType) => state.todoStore.test);
  console.log(testName);

  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        {length} items left
      </Text>
      <PrimaryButton onClick={() => dispatch(onRemoveCompletedThunk(1500))}>Delete completed</PrimaryButton>
    </Stack>
  );
};

export default Footer;
