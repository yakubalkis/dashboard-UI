import { Box, styled } from "@mui/material";

interface CompanyCardProps {
  teamsCardComponent: React.ReactNode;
  topEmployeesCardComponent: React.ReactNode;
}

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "10px",
});

export const CompanyCard: React.FC<CompanyCardProps> = ({
  teamsCardComponent,
  topEmployeesCardComponent,
}) => {
  return (
    <StyledBox>
      {topEmployeesCardComponent}
      {teamsCardComponent}
    </StyledBox>
  );
};
