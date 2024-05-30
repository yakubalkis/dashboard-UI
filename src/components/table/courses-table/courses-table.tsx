import React, { useState } from "react";
import { GridPaginationModel } from "@mui/x-data-grid";
import { Course } from "../../../types/types";
import * as S from "./courses-table.styled";
import { getCoursesTableColumns } from "./courses-table.columns";

type Table = {
  rows: Course[];
};

export const CoursesTable: React.FC<Table> = ({ rows }) => {
  const columns = getCoursesTableColumns();
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 5,
  });

  return (
    <S.StyledDataGrid
      columns={columns}
      rows={rows}
      pageSizeOptions={[5]}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      disableRowSelectionOnClick
    />
  );
};
