import React, { useState } from "react";
import { GridPaginationModel } from "@mui/x-data-grid";
import { Skill } from "../../../types/types";
import * as S from "./skills-table.styled";
import { getSkillsTableColumns } from "./skills-table.columns";

type Table = {
  rows: Skill[];
};

export const SkillsTable: React.FC<Table> = ({ rows }) => {
  const columns = getSkillsTableColumns();
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
