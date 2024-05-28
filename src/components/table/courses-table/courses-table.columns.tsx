import { GridColDef } from "@mui/x-data-grid";
import { HeaderCell } from "../table-cells/header-cell";

const defaultConfig: Partial<GridColDef> = {
  flex: 0.5,
  sortable: false,
  filterable: false,
  disableColumnMenu: true,
  renderHeader: HeaderCell,
};

export const getCoursesTableColumns = () => {
  return [
    {
      field: "assigned_to",
      headerName: "Assigned To",
      ...defaultConfig,
    },
    {
      field: "title",
      headerName: "Title",
      ...defaultConfig,
    },
    {
      field: "description",
      headerName: "Description",
      ...defaultConfig,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      ...defaultConfig,
    },
    {
      field: "due_date",
      headerName: "Due Date",
      ...defaultConfig,
    },
  ];
};
