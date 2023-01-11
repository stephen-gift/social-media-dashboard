import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SMDSummaryCard } from "../../../components";

export type SummaryProps = {
  facebook?: any;
  instagram?: any;
  youtube?: any;
  twitter?: any;
  followers?: any;
  subscribers?: any;
  noFollowers?: string | number | any;
  noSubscribers?: string | number | any;
};

export const data = [
  {
    id: 1,
    facebook: "1987",
    twitter: "1044",
    instagram: "11k",
    youtube: "8239",
  },
];

const SMDSummary = () => {
  return (
    <>
      {data.map((d) => {
        return (
          <SimpleGrid key={d.id} columns={4} spacing={3}>
            <SMDSummaryCard facebook followers noFollowers={d.facebook} />
            <SMDSummaryCard twitter followers noFollowers={d.twitter} />
            <SMDSummaryCard instagram followers noFollowers={d.instagram} />
            <SMDSummaryCard youtube subscribers noSubscribers={d.youtube} />
            SMDSummary
          </SimpleGrid>
        );
      })}
    </>
  );
};

export default SMDSummary;
