import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import React from "react";
import { Props } from "../../containers/Homepage/Summary";

const SMDIconUsername = ({ facebook, instagram, youtube, twitter }: Props) => {
  return (
    <Box>
      {facebook ? (
        <Flex alignItems="center" gap={2}>
          <Icon as={FaFacebookSquare} color="blue.200" />
          <Text as="small">@nathanf</Text>
        </Flex>
      ) : (
        ""
      )}

      {twitter ? (
        <Flex alignItems="center" gap={2}>
          <Icon as={FaTwitter} color="blue.200" />
          <Text as="small">@nathanf</Text>
        </Flex>
      ) : (
        ""
      )}

      {instagram ? (
        <Flex alignItems="center" gap={2}>
          <Icon as={FaInstagram} color="blue.200" />
          <Text as="small">@realnathanf</Text>
        </Flex>
      ) : (
        ""
      )}

      {youtube ? (
        <Flex alignItems="center" gap={2}>
          <Icon as={FaYoutube} color="blue.200" />
          <Text as="small">Nathan F.</Text>
        </Flex>
      ) : (
        ""
      )}
    </Box>
  );
};

export default SMDIconUsername;
