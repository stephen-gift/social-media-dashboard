import {
  Box,
  Container,
  Flex,
  Portal,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import SMDHeader from "./Header";
import SMDOverview from "./Overview";
import SMDSummary from "./Summary";

const SMDHomepageContainer = () => {
  return (
      <Box pos="relative">
        <Box
          h="250px"
          w="full"
          bgColor={useColorModeValue("light.200", "dark.200")}
          position="absolute"
          top={0}
          left={0}
          zIndex="-1"
        />
        <Container maxW="container.xl" pos="relative" pt={7}>
          <Flex flexDir="column" gap={9}>
            <SMDHeader />
            <SMDSummary />
            <SMDOverview />
          </Flex>
        </Container>
    </Box>
  );
};

export default SMDHomepageContainer;
