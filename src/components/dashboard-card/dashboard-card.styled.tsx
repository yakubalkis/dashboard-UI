import { Box, styled, Typography } from "@mui/material";

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

export const StyledTypography = styled(Typography)`
  font-family: 'Inter';
  lineheight: 24px;
  letter-spacing: 0.5px;
`;
