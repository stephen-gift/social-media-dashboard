import { Box, Flex, Heading, Text } from "@chakra-ui/react";
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
                <Heading>{noFollowers}</Heading>
                <Text as="small">FOLLOWERS</Text>
              </Flex>
            ) : (
              <Flex flexDir="column" alignItems="center">
                <Heading>{noSubscribers}</Heading>
                <Text as="small">SUBSCRIBERS</Text>
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
