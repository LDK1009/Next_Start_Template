import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    black: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
    };
  }

  interface PaletteOptions {
    black?: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
    };
  }

  interface TypeText {
    white: string;
  }
}

// 서비스에 어울리는 색상 팔레트
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#0000FF",
      dark: "#0000CC",
      light: "#3333FF",
    },
    secondary: {
      main: "#0000FF",
      dark: "#0000CC",
      light: "#3333FF",
    },
    error: {
      main: "#F44336",
    },
    warning: {
      main: "#FF9800",
    },
    info: {
      main: "#2196F3",
    },
    success: {
      main: "#4CAF50",
    },
    black: {
      0: "#ffffff",
      100: "#CCCCCC",
      200: "#AAAAAA",
      300: "#888888",
      400: "#666666",
      500: "#444444",
      600: "#222222",
      700: "#000000",
    },
    background: {
      default: "#000000",
      paper: "#333333",
    },
    text: {
      primary: "#000000",
      secondary: "#777777",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Pretendard-Regular', 'Noto Sans KR', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "inherit",
          },
        },
        contained: {
          "&:hover": {
            color: "white",
          },
        },
      },
    },
  },
});
