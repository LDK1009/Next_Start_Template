import { css } from '@emotion/react';

// 믹스인 정의
// Q&A. 믹스인(Mixin)이란 재사용 가능한 스타일 조각을 정의하여 여러 컴포넌트에서 공유하는 방식을 의미합니다.
// 전체 검색(ctrl + shift + F)에 mixinFlex를 검색해 믹스인 활용 예시를 찾아보세요.
export const mixinFlex = (direction : "row" | "column") => css`
  display: flex;
  flex-direction: ${direction};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// 더 유연한 Flex 믹스인
export const mixinFlexCustom = (
  direction: "row" | "column" = "row",
  justifyContent: string = "center",
  alignItems: string = "center",
  gap?: string
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  ${gap && `gap: ${gap}`};
`;

// 텍스트 말줄임표 믹스인 (한 줄)
export const mixinEllipsis = (width: string = "100%") => css`
  max-width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 텍스트 말줄임표 믹스인 (여러 줄)
export const mixinMultilineEllipsis = (lines: number = 2) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 반응형 미디어 쿼리 믹스인
export const mixinMediaQuery = (breakpoint: number) => (styles: string) => css`
  @media (max-width: ${breakpoint}px) {
    ${styles}
  }
`;

// 그림자 효과 믹스인
export const mixinBoxShadow = (intensity: "light" | "medium" | "heavy" = "medium") => {
  const shadows = {
    light: "0 2px 5px rgba(0, 0, 0, 0.1)",
    medium: "0 4px 8px rgba(0, 0, 0, 0.15)",
    heavy: "0 8px 16px rgba(0, 0, 0, 0.2)"
  };
  
  return css`
    box-shadow: ${shadows[intensity]};
  `;
};

// 애니메이션 트랜지션 믹스인
export const mixinTransition = (properties: string[] = ["all"], duration: number = 0.3) => {
  const props = properties.join(", ");
  return css`
    transition: ${props} ${duration}s ease;
  `;
};

// 스크롤바 스타일링 믹스인
export const mixinScrollbar = (width: string = "8px", thumbColor: string = "#888", trackColor: string = "#f1f1f1") => css`
  &::-webkit-scrollbar {
    width: ${width};
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${thumbColor};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: ${trackColor};
  }
`;