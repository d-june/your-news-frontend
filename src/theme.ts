import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#18333E",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: "Comfortaa",
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 8,
        },
      },
    },
    MuiPopover: {},
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: "1px solid #18333E",
          borderRadius: "30.5px",
          textTransform: "inherit",
          fontSize: 16,
          transition: "all 0.3s ease-in-out 0s",
          "&:hover": {
            border: "1px solid #FF7F5C",
            color: "#FF7F5C",
            background: "inherit",
            boxShadow:
              "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important",
          },
          "&:active": {
            boxShadow:
              "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important",
            transform: "translateY(1px)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Comfortaa",
          border: "1px solid #18333E",
          borderRadius: "30.5px",
          textTransform: "inherit",
          fontSize: 16,
          "&:hover": {
            border: "1px solid #FF7F5C",
            color: "#FF7F5C",
            background: "inherit",
            boxShadow:
              "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important",
          },
          "&:active": {
            boxShadow:
              "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important",
            transform: "translateY(1px)",
          },
        },
      },
    },
  },
});
