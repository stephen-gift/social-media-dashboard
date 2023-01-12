import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { data, SummaryProps } from "../../containers/Homepage/Summary";

const SMDFollowers = ({
  followers,
  subscribers,
  noFollowers,
  noSubscribers,
}: SummaryProps) => {
  return (
    <>
      {data.map((d) => {
        return (
          <Box key={d.id}>
            {followers ? (
              <Flex flexDir="column" alignItems="center">
                <Heading color="light.500" _dark={{ color: "dark.500" }}>
                  {noFollowers}
                </Heading>
                <Text
                  as="small"
                  color="light.400"
                  _dark={{ color: "dark.400" }}
                >
                  FOLLOWERS
                </Text>
              </Flex>
            ) : (
              <Flex flexDir="column" alignItems="center">
                <Heading color="light.500" _dark={{ color: "dark.500" }}>
                  {noSubscribers}
                </Heading>
                <Text
                  as="small"
                  color="light.400"
                  _dark={{ color: "dark.400" }}
                >
                  SUBSCRIBERS
                </Text>
              </Flex>
            )}

            {/* {subscribers ? (
            ) : (
              ""
            )} */}
          </Box>
        );
      })}
    </>
  );
};

export default SMDFollowers;
