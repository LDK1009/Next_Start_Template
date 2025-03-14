import ThemeProviderWrapper from "@/styles/ThemeProviderWrapper";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CommonBottomNavigation from "@/components/common/CommonBottomNavigation";
import CommonModal from "@/components/common/CommonModal";
import ClientSnackbarProvider from "@/lib/ClientSnackbarProvider";

// SEO 메타데이터
export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "your_website_title",
  description: "your_website_description",
  keywords: "keyword1, keyword2, keyword3, ...",
  openGraph: {
    title: "your_website_title",
    description: "your_website_description",
    url: "https://example.com(your_website_url)",
    images: [
      {
        url: "https://example.com/img/logo-512.png",
        width: 512,
        height: 512,
        alt: "your_app_name-logo",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/img/logo-192.png",
    apple: "/img/logo-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {/* MUI 캐시 프로바이더 (Next15 - MUI 호환)  */}
        <AppRouterCacheProvider>
          {/* MUI 테마 프로바이더 */}
          <ThemeProviderWrapper>
            {/* 스낵바 */}
            <ClientSnackbarProvider />
            {/* 전역 모달 */}
            <CommonModal />
            {/* 바텀 내비게이션 */}
            <CommonBottomNavigation />
            {/* page.tsx */}
            {children}
          </ThemeProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
