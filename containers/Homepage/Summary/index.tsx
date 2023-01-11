import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SMDSummaryCard } from "../../../components";

const SMDSummary = () => {
  return (
    <SimpleGrid columns={4} spacing={3}>
      <SMDSummaryCard />
      <SMDSummaryCard />
      <SMDSummaryCard />
      <SMDSummaryCard />
      SMDSummary
    </SimpleGrid>
  );
};

export default SMDSummary;
