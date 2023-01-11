import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import { data, OverviewProps } from "../../containers/Homepage/Overview";

export const UpIcon = () => {
  return <FaCaretUp color="hsl(163, 72%, 41%)" />;
};
export const DownIcon = () => {
  return <FaCaretDown color="hsl(356, 69%, 56%)" />;
};

const SMDNumberPercentage = ({ noAction, noPercent, red }: OverviewProps) => {
  return (
    <>
      {data.map((d) => {
        return (
          <Flex key={d.id} justifyContent="space-between" alignItems="flex-end">
            <Heading size="lg">{noAction}</Heading>

            <Flex alignItems="center" gap={1}>
              <Icon as={red ? DownIcon : UpIcon} />
              <Text
                as="small"
                color={red ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)"}
              >
                {noPercent}
              </Text>
              <Text
                as="small"
                color={red ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)"}
              >
                %
              </Text>
            </Flex>
          </Flex>
        );
      })}
    </>
  );
};

export default SMDNumberPercentage;
