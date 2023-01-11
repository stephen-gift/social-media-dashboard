import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { data, Props } from "../../containers/Homepage/Summary";

const SMDFollowers = ({
  followers,
  subscribers,
  noFollowers,
  noSubscribers,
}: Props) => {
  return (
    <>
      {data.map((d) => {
        return (
          <Box key={d.id}>
            {followers ? (
              <Flex flexDir="column" alignItems="center">
                <Heading>{noFollowers}</Heading>
                <Text as="small">FOLLOWERS</Text>
              </Flex>
            ) : (
              ""
            )}

            {subscribers ? (
              <Flex flexDir="column" alignItems="center">
                <Heading>{noSubscribers}</Heading>
                <Text as="small">SUBSCRIBERS</Text>
              </Flex>
            ) : (
              ""
            )}
          </Box>
        );
      })}
    </>
  );
};

export default SMDFollowers;
