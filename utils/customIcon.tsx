import {
  FaCaretDown,
  FaCaretUp,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Icon, Text } from "@chakra-ui/react";

export const UpIcon = () => {
  return <Icon as={FaCaretUp} color="success.100" />;
};
export const DownIcon = () => {
  return <Icon as={FaCaretDown} color="error.100" />;
};

export const SMDFacebookIcon = () => {
  return <Icon as={FaFacebookSquare} color="facebook.100" />;
};
export const SMDTwitterIcon = () => {
  return <Icon as={FaTwitter} color="twitter.100" />;
};
export const SMDInstagramIcon = () => {
  return (
    <Icon
      as={FaInstagram}
      bgGradient="linear(to-r, instagram.100, instagram.200)"
    />
  );
};
export const SMDYoutubeIcon = () => {
  return <Icon as={FaYoutube} color="youtube.100" />;
};
