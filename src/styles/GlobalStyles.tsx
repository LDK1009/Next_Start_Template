"use client";
import { Global, css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        /* 폰트 설정 */
        @font-face {
          font-family: "Pretendard";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Thin.woff2") format("woff2");
          font-weight: 100;
          font-display: swap;
        }

        @font-face {
          font-family: "Pretendard";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-ExtraLight.woff2")
            format("woff2");
          font-weight: 200;
          font-display: swap;
        }

        @font-face {
          font-family: "Pretendard";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Light.woff2") format("woff2");
          font-weight: 300;
          font-display: swap;
        }

        @font-face {
          font-family: "Pretendard";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Regular.woff2") format("woff2");
          font-weight: 400;
          font-display: swap;
        }

        @font-face {
          font-family: "Pretendard";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Medium.woff2") format("woff2");
          font-weight: 500;
          font-display: swap;
        }

        @font-face {
          font-family: "Pretendard";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-SemiBold.woff2") format("woff2");
          font-weight: 600;
          font-display: swap;
        }

        @font-face {
          font-family: "Pretendard";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Bold.woff2") format("woff2");
          font-weight: 700;
          font-display: swap;
        }

        @font-face {
          font-family: "Pretendard";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-ExtraBold.woff2")
            format("woff2");
          font-weight: 800;
          font-display: swap;
        }

        @font-face {
          font-family: "Pretendard";
          src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Black.woff2") format("woff2");
          font-weight: 900;
          font-display: swap;
        }

        /* 리셋 스타일 */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Pretendard", sans-serif;
        }

        /* 기본 스타일 */
        html,
        body {
          font-family: ${theme.typography.fontFamily};
          line-height: 1.5;
          color: ${theme.palette.text.primary};
          background-color: ${theme.palette.background.default};

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* 스크롤바 스타일링 */
        ::-webkit-scrollbar {
          width: 8px;
        }

        /* 스크롤바 트랙 스타일링 */
        ::-webkit-scrollbar-track {
          background: ${theme.palette.background.paper};
        }

        /* 스크롤바 썸 스타일링 */
        ::-webkit-scrollbar-thumb {
          background: ${theme.palette.divider};
          border-radius: 4px;
        }

        /* 스크롤바 썸 호버 스타일링 */
        ::-webkit-scrollbar-thumb:hover {
          background: ${theme.palette.text.disabled};
        }

        /* 링크 스타일링 */
        a {
          color: ${theme.palette.primary.main};
          text-decoration: none;
          transition: color 0.2s ease;
        }

        /* 링크 호버 스타일링 */
        a:hover {
          color: ${theme.palette.primary.dark};
        }

        /* 텍스트 선택 스타일링 */
        ::selection {
          background-color: ${theme.palette.primary.light};
          color: ${theme.palette.primary.contrastText};
        }
      `}
    />
  );
};

export default GlobalStyles;
