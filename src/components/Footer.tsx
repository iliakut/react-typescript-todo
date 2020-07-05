import React from "react";
import {PrimaryButton, Stack, Text} from "@fluentui/react";
import useItemsLength from "../hooks/useItemsLength";
import {onRemoveCompleted} from "../store/actions/todoActions";
import {useDispatch} from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  const length = useItemsLength();

  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        {length} items left
      </Text>
      <PrimaryButton onClick={() => dispatch(onRemoveCompleted(1500))}>Delete completed</PrimaryButton>
    </Stack>
  );
};

export default Footer;
