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
  return <FaCaretUp color="hsl(163, 72%, 41%)" />;
};
export const DownIcon = () => {
  return <FaCaretDown color="hsl(356, 69%, 56%)" />;
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


