import {
  Box,
  Flex,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const SMDColorModeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent="center" alignItems="center" gap={3}>
      <Text as="small" color={useColorModeValue("light.500", "dark.500")}>
        Dark Mode
      </Text>
      <Switch size="lg" onChange={toggleColorMode} />
    </Flex>
  );
};

export default SMDColorModeToggle;
