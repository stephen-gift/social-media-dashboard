import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import { SMDOverviewCard } from "../../../components";

export type OverviewProps = {
  facebook?: any;
  instagram?: any;
  youtube?: any;
  twitter?: any;
  red?: any;
  topAction?: string;
  noAction?: string | number;
  noPercent?: string | number;
};

const SMDOverview = () => {
  return data.map((d) => {
    return (
      <VStack
        key={d.id}
        justifyContent="center"
        alignItems="flex-start"
        w="full"
      >
        <Heading>Overview - Today</Heading>

        <SimpleGrid columns={4} w="full" spacing={5}>
          <SMDOverviewCard topAction={d.topAction.fbPV} facebook />
          <SMDOverviewCard topAction={d.topAction.fbLikes} facebook />
          <SMDOverviewCard topAction={d.topAction.igLikes} instagram />
          <SMDOverviewCard topAction={d.topAction.igPV} instagram />
          <SMDOverviewCard topAction={d.topAction.twRe} twitter />
          <SMDOverviewCard topAction={d.topAction.twLikes} twitter />
          <SMDOverviewCard topAction={d.topAction.ytLikes} youtube />
          <SMDOverviewCard topAction={d.topAction.ytTV} youtube />
        </SimpleGrid>
      </VStack>
    );
  });
};

export default SMDOverview;

export const data = [
  {
    id: 1,
    topAction: {
      fbPV: "Page Views",
      fbLikes: "Likes",
      igLikes: "Likes",
      igPV: "Profile Views",
      twRe: "Retweets",
      twLikes: "Likes",
      ytLikes: "Likes",
      ytTV: "Total Views",
    },
    noAction: {
      fbPV: "87",
      fbLikes: "52",
      igLikes: "5462",
      igPV: "52k",
      twRe: "117",
      twLikes: "507",
      ytLikes: "107",
      ytTV: "1407",
    },
    noPercent: {
      fbPV: "3",
      fbLikes: "2",
      igLikes: "2257",
      igPV: "1375",
      twRe: "303",
      twLikes: "553",
      ytLikes: "19",
      ytTV: "12",
    },
  },
];
