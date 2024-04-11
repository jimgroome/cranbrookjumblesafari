import { createTheme, responsiveFontSizes } from "@mui/material";

const alegreya = {
  fontFamily: ["Alegreya", "sans-serif"].join(","),
  fontWeight: 700,
  color: "#3f5b60",
};
const antonio = {
  fontFamily: ["Antonio", "sans-serif"].join(","),
  fontWeight: 700,
  color: "#000",
};
const jost = {
  fontFamily: ["Jost Variable", "sans-serif"].join(","),
  // fontWeight: 700,
  color: "#000",
};
// const craftyGirls = { fontFamily: ["Crafty Girls", "sans-serif"].join(",") };

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    cta: true;
  }
}

let theme = createTheme({
  typography: {
    h1: {
      ...antonio,
      textTransform: "uppercase",
      lineHeight: 1.05,
    },
    h2: {
      ...antonio,
      textTransform: "uppercase",
      // fontSize: 12,
    },
    subtitle1: {
      ...jost,
    },
    h4: {
      ...jost,
      textTransform: "uppercase",
    },
    h3: {
      ...antonio,
      textTransform: "uppercase",
    },
    body1: {
      ...jost,
      textTransform: "uppercase",
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
    MuiButton: {
      variants: [
        {
          props: { variant: "cta" },
          style: {
            fontSize: 30,
            borderRadius: 0,
            fontFamily: '"Antonio", sans-serif',
            backgroundColor: "white",
            borderWidth: "8px",
            borderStyle: "solid",
            borderColor: "black",
            "&:hover": {
              backgroundColor: "white",
              borderWidth: "8px",
              borderStyle: "solid",
              borderColor: "#e8c79f",
            },
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: "#fd5759",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
