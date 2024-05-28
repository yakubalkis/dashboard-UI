import { Tooltip, Typography, TypographyProps, styled } from "@mui/material";
import React, { PropsWithChildren, ReactNode } from "react";

const StyledTypography = styled(Typography)({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

type Props = {
  tooltipTitle?: ReactNode;
  maxWidth?: string | number;
  width?: string | number;
};

const CustomTypography: React.FC<
  PropsWithChildren<TypographyProps & Props>
> = ({ children, tooltipTitle = "", width, maxWidth, ...props }) => {
  const node = (
    <StyledTypography
      variant="caption"
      {...props}
      style={{ ...(props.style || {}), width, maxWidth }}
    >
      {children}
    </StyledTypography>
  );

  return tooltipTitle === null ? (
    node
  ) : (
    <Tooltip title={tooltipTitle || children || ""}>{node}</Tooltip>
  );
};

export default CustomTypography;
