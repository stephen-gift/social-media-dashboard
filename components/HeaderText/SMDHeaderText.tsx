import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const SMDHeaderText = () => {
  return (
    <Flex flexDir="column" justifyContent='center' alignItems='flex-start'>
      <Heading color={useColorModeValue("light.500", "dark.500")}>
        Social Media Dashboard
      </Heading>
      <Text color={useColorModeValue("light.400", "dark.400")}>
        Total Followers: 23,004
      </Text>
    </Flex>
  );
};

export default SMDHeaderText;
