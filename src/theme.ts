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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "26px",
          textTransform: "inherit",
          fontSize: 16,
          "&:hover": {
            background: "#F2F8FD",
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
