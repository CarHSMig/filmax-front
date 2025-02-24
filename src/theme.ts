import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffcc00",
    },
    secondary: {
      main: "#1a1a1a",
    },
    background: {
      default: "#121212",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
});

export default theme;
