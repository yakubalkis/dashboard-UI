import { GridColDef } from "@mui/x-data-grid";
import { HeaderCell } from "../table-cells/header-cell";
import { ShowEmployeesButtonCell } from "../table-cells/show-employees-button-cell";

const defaultConfig: Partial<GridColDef> = {
  flex: 0.5,
  sortable: false,
  filterable: false,
  disableColumnMenu: true,
  renderHeader: HeaderCell,
};

export const getSkillsTableColumns = () => {
  return [
    {
      field: "employees",
      headerName: "Employees",
      ...defaultConfig,
      renderCell: ShowEmployeesButtonCell,
    },
    {
      field: "skill",
      headerName: "Skill",
      ...defaultConfig,
    },
  ];
};
