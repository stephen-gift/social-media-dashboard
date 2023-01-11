import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { data, OverviewProps } from "../../containers/Homepage/Overview";
import {
  SMDFacebookIcon,
  SMDInstagramIcon,
  SMDTwitterIcon,
  SMDYoutubeIcon,
} from "../../utils/customIcon";

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
            color="light.400"
            _dark={{ color: "dark.400" }}
          >
            <Text>{topAction}</Text>
            {facebook && <SMDFacebookIcon />}
            {twitter && <SMDTwitterIcon />}
            {instagram && <SMDInstagramIcon />}
            {youtube && <SMDYoutubeIcon />}
          </Flex>
        );
      })}
    </>
  );
};

export default SMDActionIcon;
