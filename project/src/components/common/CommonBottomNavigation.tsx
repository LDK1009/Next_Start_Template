"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Paper, styled } from "@mui/material";
import { SearchOutlined, CottageOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import { mixinFlex } from "@/styles/mixins";
import Link from "next/link";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("home");

  const navigationItems = [
    {
      label: "홈",
      value: "home",
      icon: <CottageOutlined />,
      href: "/",
    },
    {
      label: "검색",
      value: "search",
      icon: <SearchOutlined />,
      href: "/",
    },
    {
      label: "마이페이지",
      value: "mypage",
      icon: <PersonOutlineOutlined />,
      href: "/my-page",
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container elevation={3}>
      <BottomNavigation value={value} onChange={handleChange}>
        {navigationItems.map((item) => (
          <BottomNavigationAction
            key={item.value}
            component={Link}
            href={item.href}
            label={item.label}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </Container>
  );
}

const Container = styled(Paper)`
  width: 100%;
  position: fixed;
  left: 0px;
  bottom: 0px;
  & .MuiBottomNavigation-root {
    width: 100%;
    ${mixinFlex("row")};
    justify-content: space-between;
  }
`;
