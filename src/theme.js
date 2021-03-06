import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#105FD2",
    },
    footerBackground: "#2D2D2D",
  },
  typography: {
    h2: {
      fontSize: "2.2rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
