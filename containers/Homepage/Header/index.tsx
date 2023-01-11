import { Flex } from "@chakra-ui/react";
import React from "react";
import { SMDColorModeToggle, SMDHeaderText } from "../../../components";

const SMDHeader = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <SMDHeaderText />
      <SMDColorModeToggle />
    </Flex>
  );
};

export default SMDHeader;
