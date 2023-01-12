import { Box, Flex, Square, Text, useColorModeValue } from "@chakra-ui/react";
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
    <>
      <Flex
        w="100%"
        minW="300px"
        bgColor={useColorModeValue("light.300", "dark.300")}
        borderRadius="lg"
        p={14}
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
        _hover={{
          filter: "brightness(90%)",
          _dark: { filter: "brightness(120%)" },
        }}
        cursor='pointer'
      >
        <Box
          position="absolute"
          top="0px"
          width="100%"
          height="5px"
          bgGradient={instagram && "linear(to-r, instagram.100, instagram.200)"}
          bgColor={
            (facebook && "facebook.100") ||
            (twitter && "twitter.100") ||
            (youtube && "youtube.100") ||
            ""
          }
        />
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
    </>
  );
};

export default SMDSummaryCard;
