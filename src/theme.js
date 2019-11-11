import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import lightBlue from "@material-ui/core/colors/lightBlue";

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: lightBlue,
      secondary: teal
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      fontSize: 16,
      h1: {
        fontFamily: "'Lobster',cursive"
      },
      h2: {
        fontFamily: "'Lobster',cursive"
      },
      h3: {
        fontFamily: "'Lobster',cursive"
      },
      h4: {
        fontFamily: "'Lobster',cursive"
      },
      h5: {
        fontFamily: "'Lobster',cursive"
      },
      h6: {
        fontFamily: "'Lobster',cursive"
      },
      subtitle1: {
        fontFamily: "'Lobster',cursive"
      },
      subtitle2: {
        fontFamily: "'Lobster',cursive"
      },
      button: {
        fontFamily: "'Lobster',cursive",
        textTransform: "capitalize",
      },
    }
  })
);
