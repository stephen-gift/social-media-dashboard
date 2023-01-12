import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import { SMDColorModeToggle, SMDHeaderText } from "../../../components";

const SMDHeader = () => {
  return (
    <Flex
      justifyContent={{ lg: "space-between", base: "center" }}
      alignItems={{ lg: "center", base: "flex-start" }}
      flexDir={{ lg: "row", base: "column" }}
      gap={{lg:'0',base:'15px'}}
    >
      <SMDHeaderText />
      <Divider display={{lg:'none'}}/>
      <SMDColorModeToggle />
    </Flex>
  );
};

export default SMDHeader;
