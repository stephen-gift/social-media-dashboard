import { Box, Container } from "@chakra-ui/react";
import React from "react";
import SMDHeader from "./Header";
import SMDOverview from "./Overview";
import SMDSummary from "./Summary";

const SMDHomepageContainer = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <SMDHeader />
        {/* <SMDSummary /> */}
        {/* <SMDOverview /> */}
      </Container>
    </Box>
  );
};

export default SMDHomepageContainer;
