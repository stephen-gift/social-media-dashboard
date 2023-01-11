import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import SMDHeader from "./Header";
import SMDOverview from "./Overview";
import SMDSummary from "./Summary";

const SMDHomepageContainer = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Flex flexDir="column" gap={9}>
          <SMDHeader />
          <SMDSummary />
          {/* <SMDOverview /> */}
        </Flex>
      </Container>
    </Box>
  );
};

export default SMDHomepageContainer;
