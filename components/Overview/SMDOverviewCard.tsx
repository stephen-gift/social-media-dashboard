import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { OverviewProps } from "../../containers/Homepage/Overview";
import SMDActionIcon from "./SMDActionIcon";

const SMDOverviewCard = ({
  topAction,
  facebook,
  instagram,
  youtube,
  twitter,
}: OverviewProps) => {
  return (
    <Flex
      flexDir="column"
      w="full"
      minW="300px"
      bgColor={useColorModeValue("hsl(227, 47%, 96%)", "hsl(228, 28%, 20%)")}
      borderRadius="lg"
      p={5}
    >
      <Box>
        {facebook && <SMDActionIcon topAction={topAction} facebook />}
        {instagram && <SMDActionIcon topAction={topAction} instagram />}
        {youtube && <SMDActionIcon topAction={topAction} youtube />}
        {twitter && <SMDActionIcon topAction={topAction} twitter />}
      </Box>
    </Flex>
  );
};

export default SMDOverviewCard;
