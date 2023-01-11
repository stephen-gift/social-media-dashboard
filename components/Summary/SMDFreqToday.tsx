import { Flex, Icon, Text } from "@chakra-ui/react";
import { SummaryProps } from "../../containers/Homepage/Summary";
import { DownIcon, UpIcon } from "../../utils/customIcon";

const SMDFreqToday = ({ red, noToday }: SummaryProps) => {
  return (
    <>
      <Flex alignItems="center" gap={1}>
        <Icon as={red ? DownIcon : UpIcon} />
        <Text
          as="small"
          color={red ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)"}
        >
          {noToday}
        </Text>
        <Text
          as="small"
          color={red ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)"}
        >
          Today
        </Text>
      </Flex>
    </>
  );
};

export default SMDFreqToday;
