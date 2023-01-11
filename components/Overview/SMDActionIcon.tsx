import { Flex, Text, Icon } from "@chakra-ui/react";
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
