import { Avatar, Box, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const AvatarCell = (params: GridRenderCellParams) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "5px",
        gap: "5px",
      }}
    >
      <Avatar>
        <AccountBoxIcon />
      </Avatar>

      <Typography variant="body2">{params.value.toString()}</Typography>
    </Box>
  );
};
