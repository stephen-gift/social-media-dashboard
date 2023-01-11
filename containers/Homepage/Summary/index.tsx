import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SMDSummaryCard } from "../../../components";

export type Props = {
  facebook?: any;
  instagram?: any;
  youtube?: any;
  twitter?: any;
};

const SMDSummary = () => {
  return (
    <SimpleGrid columns={4} spacing={3}>
      <SMDSummaryCard facebook />
      <SMDSummaryCard twitter />
      <SMDSummaryCard instagram />
      <SMDSummaryCard youtube />
      SMDSummary
    </SimpleGrid>
  );
};

export default SMDSummary;
