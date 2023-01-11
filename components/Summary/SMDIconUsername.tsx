import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { SummaryProps } from "../../containers/Homepage/Summary";
import {
  SMDFacebookIcon,
  SMDInstagramIcon,
  SMDTwitterIcon,
  SMDYoutubeIcon,
} from "../../utils/customIcon";

const SMDIconUsername = ({
  facebook,
  instagram,
  youtube,
  twitter,
}: SummaryProps) => {
  return (
    <Box>
      {facebook ? (
        <Flex alignItems="center" gap={2}>
          <SMDFacebookIcon />
          <Text as="small" color="light.400" _dark={{color:"dark.400"}}>
            @nathanf
          </Text>
        </Flex>
      ) : (
        ""
      )}

      {twitter ? (
        <Flex alignItems="center" gap={2}>
          <SMDTwitterIcon />
                    <Text as="small" color="light.400" _dark={{color:"dark.400"}}>

            @nathanf
          </Text>
        </Flex>
      ) : (
        ""
      )}

      {instagram ? (
        <Flex alignItems="center" gap={2}>
          <SMDInstagramIcon />
                    <Text as="small" color="light.400" _dark={{color:"dark.400"}}>

            @realnathanf
          </Text>
        </Flex>
      ) : (
        ""
      )}

      {youtube ? (
        <Flex alignItems="center" gap={2}>
          <SMDYoutubeIcon />
                    <Text as="small" color="light.400" _dark={{color:"dark.400"}}>

            Nathan F.
          </Text>
        </Flex>
      ) : (
        ""
      )}
    </Box>
  );
};

export default SMDIconUsername;
