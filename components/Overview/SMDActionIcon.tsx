import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import React from "react";
import { data, OverviewProps } from "../../containers/Homepage/Overview";

const SMDActionIcon = ({
  topAction,
  facebook,
  instagram,
  youtube,
  twitter,
}: OverviewProps) => {
  return (
    <>
      {data.map((d) => {
        return (
          <Flex
            key={d.id}
            justifyContent="space-between"
            alignItems="center"
            w="full"
          >
            <Text>{topAction}</Text>
            {facebook && <Icon as={FaFacebookSquare} color="blue.200" />}
            {instagram && <Icon as={FaTwitter} color="blue.200" />}
            {youtube && <Icon as={FaInstagram} color="blue.200" />}
            {twitter && <Icon as={FaYoutube} color="blue.200" />}
          </Flex>
        );
      })}
    </>
  );
};

export default SMDActionIcon;
