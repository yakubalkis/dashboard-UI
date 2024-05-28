import { Box, Divider, styled } from "@mui/material";
import { CustomTypography } from "../custom-typography";

export const RootBox = styled(Box)`
  width: 95%;
  height: 500px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  padding: 24px;
  margin-top: 36px;
  background-color: white;
`;

export const HeaderDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-left: 24px;
`;

export const InnerDiv = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OverallStats = styled(Box)`
  height: 72px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 48px;
  margin-left: 24px;
`;

export const StyledTypography = styled(CustomTypography)`
  color: rgba(0, 0, 0, 0.54);
  lineheight: 24px;
  letter-spacing: 0.5px;
`;

export const PercentageDiv = styled(Box)`
  margin-top: 12px;
`;

export const BoldTypography = styled(CustomTypography)`
  font-family: "Space Grotesk";
  font-size: 34px;
  line-height: 36px;
  font-weight: 400px;
`;

export const StyledDivider = styled(Divider)`
  color: ${({ theme }) => theme.palette.divider};
  width: 1px;
  height: 72px;
  margin-left: 48px;
  margin-right: 48px;
  margin-top: 0px;
`;

export const StyledGraphBox = styled(Box)`
  margin-top: 24px;
  margin-left: 12px;
`;
