import React from "react";
import { Grid, Card, CardContent, Typography, styled } from "@mui/material";
import { Employee } from "../../../types/types";

interface EmployeeCardProps {
  employee: Employee;
}

const StyledTypography = styled(Typography)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <Grid key={employee.email} item xs={12} sm={6} md={6} lg={4}>
      <Card>
        <CardContent>
          <StyledTypography variant="body2" fontWeight={600}>
            {employee.name}
            <Typography variant="body2" component={"span"}>
              {employee.title}
            </Typography>
          </StyledTypography>

          <Typography variant="body2" color="text.secondary">
            <Typography variant="body2" component={"span"} color="black">
              Email:
            </Typography>{" "}
            {employee.email}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <Typography variant="body2" component={"span"} color="black">
              Score:
            </Typography>{" "}
            {employee.current_score}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <Typography variant="body2" component={"span"} color="black">
              Lessons taken:
            </Typography>{" "}
            {employee.lessons_taken}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <Typography variant="body2" component={"span"} color="black">
              Skills being developed:
            </Typography>{" "}
            {employee.skills_being_developed.join(", ")}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
