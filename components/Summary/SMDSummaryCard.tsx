import { Box, Flex, Square, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const SMDSummaryCard = () => {
  return (
    <Square
      size="250px"
      bgColor={useColorModeValue("hsl(227, 47%, 96%)", "hsl(228, 28%, 20%)")}
      borderRadius="lg"
    >
      <Flex flexDir="column">
        <Box>HI</Box>
        <Box>HI</Box>
        <Box>HI</Box>
      </Flex>
    </Square>
  );
};

export default SMDSummaryCard;
