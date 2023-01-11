import {
  FaCaretDown,
  FaCaretUp,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

export const UpIcon = () => {
  return <FaCaretUp color="hsl(163, 72%, 41%)" />;
};
export const DownIcon = () => {
  return <FaCaretDown color="hsl(356, 69%, 56%)" />;
};

export const SMDFacebookIcon = () => {
  return <Icon as={FaFacebookSquare} color="blue.200" />;
};
export const SMDTwitterIcon = () => {
  return <Icon as={FaTwitter} color="blue.200" />;
};
export const SMDInstagramIcon = () => {
  return <Icon as={FaInstagram} color="blue.200" />;
};
export const SMDYoutubeIcon = () => {
  return <Icon as={FaYoutube} color="blue.200" />;
};
