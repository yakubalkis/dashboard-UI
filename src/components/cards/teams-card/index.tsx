import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { Team } from "../../../types/types";
import { TeamCard } from "./team-card";

interface TeamsCardProps {
  teams: Team[];
}

const StyledBox = styled(Box)`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  background-color: white;
  padding: 10px;
`;

const StyledInnerBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StyledButton = styled(Button)({
  textDecoration: "none",
  textTransform: "none",
  borderRadius: "15px",
});

export const TeamsCard: React.FC<TeamsCardProps> = ({ teams }) => {
  const teamsCard = teams.map((team) => {
    return <TeamCard key={team.title} team={team} />;
  });

  return (
    <StyledBox>
      <StyledInnerBox>
        <Typography fontWeight={600} color={"secondary"} component={"p"}>
          Teams
        </Typography>
        <StyledButton size="small" variant="contained">
          Create new team
        </StyledButton>
      </StyledInnerBox>

      <Grid container spacing={2}>
        {teamsCard}
      </Grid>
    </StyledBox>
  );
};
