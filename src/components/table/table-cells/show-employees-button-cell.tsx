import { Button } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { getEmployeesWithSkill } from "../../../utils/getEmployeesWithSkill";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { openEmployeeModal } from "../../../redux/slice/modalSlice";

export const ShowEmployeesButtonCell = (params: GridRenderCellParams) => {
  const dispatch = useAppDispatch();
  const teams = useAppSelector((state) => state.employeeSlice.data.teams);

  const handleClick = () => {
    const employeesWithSkill = getEmployeesWithSkill(teams, params.row.skill);
    dispatch(openEmployeeModal(employeesWithSkill));
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        textDecoration: "none",
        textTransform: "none",
        marginBottom: "3px",
      }}
      size="large"
      variant="outlined"
    >
      Show Employees ({params.value.toString()})
    </Button>
  );
};
