import { extendTheme, Theme } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";

const customTheme = {
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    mono: 'Roboto, system-ui, sans-serif'
  },
  fontWeights: {
    ...theme.fontWeights,
    thin: 400,
    normal: 500,
    medium: 600,
    bold: 700
  }
}

export default extendTheme(customTheme)