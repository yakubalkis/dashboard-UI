import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { TopEmployee } from "../../../types/types";

interface TopEmployeeCardProps {
  employee: TopEmployee;
}

const StyledGrid = styled(Grid)`
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.palette.divider};
  background-color: white;
  padding: 10px; /* Kart içeriği için padding ekledik */
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InnerBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const TopEmployeeCard: React.FC<TopEmployeeCardProps> = ({
  employee,
}) => {
  return (
    <StyledGrid item xs={12}>
      <StyledBox>
        <InnerBox>
          <Typography variant="body2">{employee.name}</Typography>
          <Typography
            fontSize={"12px"}
            color={"text.secondary"}
            sx={{ marginLeft: "5px" }}
          >
            {employee.title}
          </Typography>
        </InnerBox>

        <InnerBox>
          <StarIcon fontSize="small" color="error" />
          <Typography fontWeight={600} variant="body2" color="error">
            {employee.current_score}
          </Typography>
        </InnerBox>
      </StyledBox>
    </StyledGrid>
  );
};
