import { Box, Flex, Square, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Props } from "../../containers/Homepage/Summary";
import SMDIconUsername from "./SMDIconUsername";

const SMDSummaryCard = ({ facebook, instagram, youtube, twitter }: Props) => {
  return (
    <Square
      size="250px"
      bgColor={useColorModeValue("hsl(227, 47%, 96%)", "hsl(228, 28%, 20%)")}
      borderRadius="lg"
    >
      <Flex flexDir="column" alignItems="center" justifyContent="center">
        {facebook ? <SMDIconUsername facebook /> : ""}
        {twitter ? <SMDIconUsername twitter /> : ""}
        {instagram ? <SMDIconUsername instagram /> : ""}
        {youtube ? <SMDIconUsername youtube /> : ""}

        <Box>HI</Box>
        <Box>HI</Box>
      </Flex>
    </Square>
  );
};

export default SMDSummaryCard;
