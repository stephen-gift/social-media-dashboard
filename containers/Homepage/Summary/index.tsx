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
  red?: any;
  noToday?: string | number;
};

export const data = [
  {
    id: 1,
    facebook: "1987",
    twitter: "1044",
    instagram: "11k",
    youtube: "8239",
    noToday: {
      fb: "12",
      tw: "99",
      ig: "1099",
      yt: "144",
    },
  },
];

const SMDSummary = () => {
  return (
    <>
      {data.map((d) => {
        return (
          <SimpleGrid columns={{ lg: 4, base: 1 }} key={d.id} spacing={6}>
            <SMDSummaryCard
              facebook
              followers
              noFollowers={d.facebook}
              noToday={d.noToday.fb}
            />
            <SMDSummaryCard
              twitter
              followers
              noFollowers={d.twitter}
              noToday={d.noToday.tw}
            />
            <SMDSummaryCard
              instagram
              followers
              noFollowers={d.instagram}
              noToday={d.noToday.ig}
            />
            <SMDSummaryCard
              youtube
              subscribers
              noSubscribers={d.youtube}
              red
              noToday={d.noToday.yt}
            />
          </SimpleGrid>
        );
      })}
    </>
  );
};

export default SMDSummary;
