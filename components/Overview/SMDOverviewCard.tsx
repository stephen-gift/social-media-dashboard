import { Box, filter, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { OverviewProps } from "../../containers/Homepage/Overview";
import SMDActionIcon from "./SMDActionIcon";
import SMDNumberPercentage from "./SMDNumberPercentage";

const SMDOverviewCard = ({
  topAction,
  facebook,
  instagram,
  youtube,
  twitter,
  red,
  noAction,
  noPercent,
}: OverviewProps) => {
  return (
    <Flex
      flexDir="column"
      w="full"
      minW="300px"
      bgColor={useColorModeValue("light.300", "dark.300")}
      _hover={{
        filter: "brightness(90%)",
        _dark: { filter: "brightness(120%)" },
      }}
      cursor="pointer"
      borderRadius="lg"
      p={5}
      gap={3}
    >
      <Box>
        {facebook && <SMDActionIcon topAction={topAction} facebook />}
        {instagram && <SMDActionIcon topAction={topAction} instagram />}
        {youtube && <SMDActionIcon topAction={topAction} youtube />}
        {twitter && <SMDActionIcon topAction={topAction} twitter />}
      </Box>
      <Box>
        {red ? (
          <SMDNumberPercentage red noAction={noAction} noPercent={noPercent} />
        ) : (
          <SMDNumberPercentage noAction={noAction} noPercent={noPercent} />
        )}
      </Box>
    </Flex>
  );
};

export default SMDOverviewCard;
