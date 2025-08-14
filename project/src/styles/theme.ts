import { createTheme, Theme } from "@mui/material/styles";

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
    secondaryVariable: {
      [key: string]: {
        dark: string;
        main: string;
        light: string;
      };
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
    secondaryVariable: {
      [key: string]: {
        dark: string;
        main: string;
        light: string;
      };
    };
  }

  // 배경색 타입 정의
  interface TypeBackground {
    default: string;
    paper: string;
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
  }

  interface TypeText {
    white: string;
    black: string;
  }
}

// 서비스에 어울리는 색상 팔레트
export const muiTheme = createTheme({
  typography: {
    fontFamily: ['"Pretendard-Regular"', '"Malgun Gothic"', '"Apple SD Gothic Neo"', "sans-serif"].join(","),
    // 폰트 사이즈별 설정
    h1: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h3: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "1.75rem",
      fontWeight: "bold",
    },
    h4: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontWeight: 500,
    },
    caption: {
      fontFamily: '"Pretendard-Regular", sans-serif',
      fontSize: "0.75rem",
    },
  },
  palette: {
    primary: {
      dark: "#1565C0", // 차분한 딥 블루 (전문성과 신뢰감)
      main: "#4DB6AC", // 메인 민트블루 (상쾌하고 편안한 느낌)
      light: "#B2DFDB", // 파스텔 민트 (부드러운 배경 톤)
    },
    secondary: {
      dark: "#00897B", // 짙은 청록 (포인트 강조)
      main: "#81C784", // 파스텔 그린 (자연스러운 포인트)
      light: "#C8E6C9", // 연한 그린 (부드러운 보조 배경)
    },
    secondaryVariable: {
      blue: {
        dark: "#5A7FDF", // 부드러운 네이비톤 파스텔
        main: "#8FAEF5", // 파스텔 블루
        light: "#CFE2FF", // 아주 연한 하늘색
      },
      green: {
        dark: "#4BAE90", // 파스텔 딥그린
        main: "#8FE5C2", // 파스텔 민트
        light: "#D6F5EC", // 밝은 민트
      },
      yellow: {
        dark: "#D4B347", // 파스텔 머스타드
        main: "#FFE38D", // 파스텔 옐로우
        light: "#FFF8D9", // 크림 옐로우
      },
      pink: {
        dark: "#E578A4", // 파스텔 로즈핑크
        main: "#FFB7D5", // 베이비핑크
        light: "#FFE6EB", // 파우더핑크
      },
      purple: {
        dark: "#9A8BC3", // 파스텔 바이올렛
        main: "#C7B5E9", // 라일락
        light: "#EEE6F9", // 연라벤더
      },
      teal: {
        dark: "#4AA8A8", // 파스텔 딥틸
        main: "#91D9D9", // 아쿠아 파스텔
        light: "#DFF5F5", // 연한 아쿠아
      },
      orange: {
        dark: "#E29E60", // 파스텔 브라운오렌지
        main: "#FFD1A3", // 파스텔 오렌지
        light: "#FFF0E1", // 크림 오렌지
      },
      beige: {
        dark: "#BCA98A", // 샌드베이지
        main: "#E6D7C3", // 파스텔 베이지
        light: "#FAF4EC", // 아이보리
      },
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
      default: "#F4FAFA", // 아주 옅은 민트+그레이 톤 (차분하고 청결한 전체 배경)
      paper: "#FFFFFF", // 카드/컴포넌트 배경
      0: "#ffffff",
      100: "#CCCCCC",
      200: "#AAAAAA",
      300: "#888888",
      400: "#666666",
      500: "#444444",
      600: "#222222",
      700: "#000000",
    },

    text: {
      primary: "#000000",
      secondary: "#777777",
      disabled: "#AAAAAA",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.text.secondary,
          "&.Mui-focused": {
            color: theme.palette.text.primary,
          },
        }),
      },
    },
  },
});
