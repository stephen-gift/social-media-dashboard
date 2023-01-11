import { Box, Flex, Square, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { SummaryProps } from "../../containers/Homepage/Summary";
import SMDFollowers from "./SMDFollowers";
import SMDFreqToday from "./SMDFreqToday";
import SMDIconUsername from "./SMDIconUsername";

const SMDSummaryCard = ({
  facebook,
  instagram,
  youtube,
  twitter,
  followers,
  subscribers,
  noFollowers,
  noSubscribers,
  red,
  noToday,
}: SummaryProps) => {
  return (
    <Flex
      w="100%"
      minW="300px"
      bgColor={useColorModeValue("light.300", "dark.300")}
      borderRadius="lg"
      p={14}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        <Box>
          {facebook ? <SMDIconUsername facebook /> : ""}
          {twitter ? <SMDIconUsername twitter /> : ""}
          {instagram ? <SMDIconUsername instagram /> : ""}
          {youtube ? <SMDIconUsername youtube /> : ""}
        </Box>

        <Box>
          {followers ? (
            <SMDFollowers followers noFollowers={noFollowers} />
          ) : (
            <SMDFollowers subscribers noSubscribers={noSubscribers} />
          )}

          {/* {subscribers ? (
          ) : (
            ""
          )} */}
        </Box>
        <Box>
          {red ? (
            <SMDFreqToday red noToday={noToday} />
          ) : (
            <SMDFreqToday noToday={noToday} />
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default SMDSummaryCard;
