"use client";

import { useDeviceType } from "@/hooks/useDeviceType";

const Main = () => {
  const { isDesktop } = useDeviceType();

  return <>{isDesktop ? <div>PC 뷰</div> : <div>모바일 뷰</div>}</>;
};

export default Main;
