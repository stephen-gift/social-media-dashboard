import {
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { data, OverviewProps } from "../../containers/Homepage/Overview";
import { DownIcon, UpIcon } from "../../utils/customIcon";

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
