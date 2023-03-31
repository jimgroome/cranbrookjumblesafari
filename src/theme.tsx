import { createTheme } from "@mui/material";

const alegreya = {
  fontFamily: ["Alegreya", "sans-serif"].join(","),
  fontWeight: 700,
  color: "#3f5b60",
};
// const craftyGirls = { fontFamily: ["Crafty Girls", "sans-serif"].join(",") };
export const theme = createTheme({
  typography: {
    h1: {
      ...alegreya,
    },
    h2: {
      ...alegreya,
    },
    h3: {
      ...alegreya,
    },
    body1: {
      // ...craftyGirls,
    },
    caption: {
      // ...craftyGirls,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        sx: {
          textDecoration: "none",
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontFamily: "sans-serif",
        },
      },
    },
    MuiInput: {
      defaultProps: {
        sx: {
          fontFamily: "sans-serif",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#70AD95",
      contrastText: "#fff",
    },
  },
});
