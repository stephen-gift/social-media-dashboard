import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import React from "react";
import { SummaryProps } from "../../containers/Homepage/Summary";

export const UpIcon = () => {
  return <FaCaretUp color="hsl(163, 72%, 41%)" />;
};
export const DownIcon = () => {
  return <FaCaretDown color="hsl(356, 69%, 56%)" />;
};

const SMDFreqToday = ({ red, noToday }: SummaryProps) => {
  return (
    <>
      <Flex alignItems="center" gap={1}>
        <Icon as={red ? DownIcon : UpIcon} />
        <Text
          as="small"
          color={red ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)"}
        >
          {noToday}
        </Text>
        <Text
          as="small"
          color={red ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)"}
        >
          Today
        </Text>
      </Flex>
    </>
  );
};

export default SMDFreqToday;
