import { Avatar, Box, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import InProgressIcon from "../../../assets/icons/in-progress.png";
import UpcomingIcon from "../../../assets/icons/upcoming.png";

export const StatusCell = (params: GridRenderCellParams) => {
  const Icon = params.value === "In Progress" ? InProgressIcon : UpcomingIcon;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "15px",
        gap: "5px",
      }}
    >
      <Typography variant="body2">{params.value.toString()}</Typography>
      <Avatar sx={{ width: "16px", height: "16px" }} src={Icon} />
    </Box>
  );
};
