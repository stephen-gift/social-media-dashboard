import {
  Box,
  Button,
  ButtonGroup,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Home() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box>
      HOME
      <Button onClick={toggleColorMode}>
        {colorMode === "dark" ? "LIGHT " : "DARK "}
        {colorMode === "dark" ? <FaSun /> : <FaMoon />}
      </Button>
    </Box>
  );
}
