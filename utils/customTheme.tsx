import { mode } from "@chakra-ui/theme-tools";
import {
  Colors,
  extendTheme,
  StyleProps,
  ThemeConfig,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";

import { switchAnatomy } from "@chakra-ui/anatomy";

export const colors: Colors = {
  light: {
    100: "#FFFFFF",
    200: "#F5F7FF",
    300: "#F0F2FA",
    400: "#63687E",
    500: "#1E202A",
  },

  dark: {
    100: "#1E202A",
    200: "#1F212E",
    300: "#252A41",
    400: "#8B97C6",
    500: "#FFFFFF",
  },

  facebook: {
    100: "#4AA6F7",
  },

  twitter: {
    100: "#1CA0F2",
  },

  instagram: {
    100: "#FDC468",
    200: "#DF4996",
  },

  youtube: {
    100: "#C4032A",
  },

  error: {
    100: "#DC414C",
  },

  success: {
    100: "#1DB489",
  },

  switch: {
    50: "#AEB3CB",
    100: "#378FE6",
    200: "#3EDA82",
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleProps) => ({
    body: {
      bg: mode("light.100", "dark.100")(props),
      color: mode("light.500", "dark.500")(props),
      fontVariant: "normal",
    },
  }),
};

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    // ...
  },
  thumb: {
    bg: "dark.300",
    _checked: { bg: "switch.50" },
  },
  track: {
    px: "2px",
    py: "2px",

    _light: {
      bg: "gray.300",
      _hover: { bgGradient: "linear(to-r, switch.100, switch.200)" },
    },
    _dark: {
      bgGradient: "linear(to-r, switch.100, switch.200)",
      _hover: { bgGradient: "linear(to-r, switch.100, switch.200)" },
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const customTheme = extendTheme({
  components: { Switch: switchTheme },

  colors,
  config,
  styles,
  breakpoints,
});

export default customTheme;
