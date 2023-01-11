import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import { data, OverviewProps } from "../../containers/Homepage/Overview";

export const UpIcon = () => {
  return <FaCaretUp color="success.100" />;
};
export const DownIcon = () => {
  return <FaCaretDown color="error.100" />;
};

const SMDNumberPercentage = ({ noAction, noPercent, red }: OverviewProps) => {
  return (
    <>
      {data.map((d) => {
        return (
          <Flex key={d.id} justifyContent="space-between" alignItems="flex-end">
            <Heading size="lg" color="light.500" _dark={{ color: "dark.500" }}>
              {noAction}
            </Heading>

            <Flex alignItems="center" gap={1}>
              <Icon as={red ? DownIcon : UpIcon} />
              <Text as="small" color={red ? "error.100" : "success.100"}>
                {noPercent}
              </Text>
              <Text as="small" color={red ? "error.100" : "success.100"}>
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
