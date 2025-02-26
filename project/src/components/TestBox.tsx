"use client";

import { styled } from "@mui/material";

const TestBox = () => {
  return (
    <div>
      <RedBox />
    </div>
  );
};

export default TestBox;

const RedBox = styled("div")`
  width: 100px;
  height: 100px;
  background-color: red;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

