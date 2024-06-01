import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import { TopEmployee } from "../../../types/types";
import { TopEmployeeCard } from "./top-employee-card";

interface TopEmployeesCardProps {
  employees: TopEmployee[];
}

const StyledBox = styled(Box)`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const TopEmployeesCard: React.FC<TopEmployeesCardProps> = ({
  employees,
}) => {
  const employeeCards = employees.map((employee) => (
    <Grid item xs={12} sm={6} md={4} key={employee.email}>
      <TopEmployeeCard employee={employee} />
    </Grid>
  ));

  return (
    <StyledBox>
      <Typography color="secondary" fontWeight={600} component="p">
        Top Employees
      </Typography>
      <Grid container spacing={1}>
        {employeeCards}
      </Grid>
    </StyledBox>
  );
};
