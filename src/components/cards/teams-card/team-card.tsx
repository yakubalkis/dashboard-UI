import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  styled,
  Avatar,
  Box,
} from "@mui/material";
import { Team } from "../../../types/types";
import { getTeamIcon } from "../../../utils/getTeamIcon";
import { useAppDispatch } from "../../../redux/store";
import { openEmployeeModal } from "../../../redux/slice/modalSlice";
import { getFirstSentence } from "../../../utils/getFirstSentence";

interface TeamCardProps {
  team: Team;
}

const StyledButton = styled(Button)(({ theme }) => ({
  textDecoration: "none",
  textTransform: "none",
  borderRadius: "10px",
  width: "90%",
  height: "30px",
  fontSize: "10px",
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "7px",
  },
}));

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

const StyledCard = styled(Card)({
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  height: "130px",
});

const InnerBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  marginTop: "-10px",
});

export const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const icon = getTeamIcon(team.title);
  const dispatch = useAppDispatch();
  const proccessedDesc = getFirstSentence(team.description);

  const handleClick = () => {
    dispatch(openEmployeeModal(team.employees));
  };

  return (
    <Grid key={team.title} item xs={12} sm={12} md={6} lg={6}>
      <StyledCard>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <StyledBox>
                <InnerBox>
                  <Avatar variant="square" src={icon || undefined} />
                  <Typography
                    sx={{
                      color: "#0A3242",
                      fontSize: {
                        xs: "12px",
                        sm: "12px",
                        lg: "15px",
                      },
                    }}
                  >
                    {team.title}
                  </Typography>
                </InnerBox>

                <StyledButton variant="outlined" onClick={handleClick}>
                  Show employees ({team.employees.length})
                </StyledButton>

                <StyledButton variant="contained">
                  Add new employee
                </StyledButton>
              </StyledBox>
            </Grid>

            <Grid item xs={7}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    lg: "14px",
                  },
                }}
                variant="body2"
              >
                {proccessedDesc}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};
