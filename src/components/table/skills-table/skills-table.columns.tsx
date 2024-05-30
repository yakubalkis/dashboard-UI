import { GridColDef } from "@mui/x-data-grid";
import { HeaderCell } from "../table-cells/header-cell";

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
    },
    {
      field: "skill",
      headerName: "Skill",
      ...defaultConfig,
    },
  ];
};
