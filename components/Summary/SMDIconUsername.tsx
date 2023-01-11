import { Box, Flex, Icon, Text } from "@chakra-ui/react";
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
          <Text as="small">@nathanf</Text>
        </Flex>
      ) : (
        ""
      )}

      {twitter ? (
        <Flex alignItems="center" gap={2}>
          <SMDTwitterIcon />
          <Text as="small">@nathanf</Text>
        </Flex>
      ) : (
        ""
      )}

      {instagram ? (
        <Flex alignItems="center" gap={2}>
          <SMDInstagramIcon />
          <Text as="small">@realnathanf</Text>
        </Flex>
      ) : (
        ""
      )}

      {youtube ? (
        <Flex alignItems="center" gap={2}>
          <SMDYoutubeIcon />
          <Text as="small">Nathan F.</Text>
        </Flex>
      ) : (
        ""
      )}
    </Box>
  );
};

export default SMDIconUsername;
