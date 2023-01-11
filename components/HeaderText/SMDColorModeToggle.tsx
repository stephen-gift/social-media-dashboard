import { Box, Flex, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const SMDColorModeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex justifyContent="center" alignItems="center" gap={3}>
      <Text as="small">Dark Mode</Text>
      <Switch id="colorMode" size="lg" onChange={toggleColorMode} />
    </Flex>
  );
};

export default SMDColorModeToggle;
