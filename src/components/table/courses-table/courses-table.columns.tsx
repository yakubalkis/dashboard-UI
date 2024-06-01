import { GridColDef, GridValueFormatter } from "@mui/x-data-grid";
import { HeaderCell } from "../table-cells/header-cell";
import { formatDate } from "../../../utils/formatDates";
import { AvatarCell } from "../table-cells/avatar-cell";
import { StatusCell } from "../table-cells/status-cell";

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
      renderCell: AvatarCell,
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
      renderCell: StatusCell,
    },
    {
      field: "due_date",
      headerName: "Due Date",
      ...defaultConfig,
      valueFormatter: (value: GridValueFormatter) => {
        return formatDate(value.toString());
      },
    },
  ];
};
