import { Box } from "@mui/material";
import { ReactNode } from "react";

interface BigBoxProps {
  borderWidth?: number;
  children: ReactNode[] | ReactNode;
}

const BigBox = ({ borderWidth, children }: BigBoxProps) => (
  <Box
    bgcolor="white"
    border={`${borderWidth || 8}px solid black`}
    px={2}
    py={2}
  >
    {children}
  </Box>
);

export default BigBox;
