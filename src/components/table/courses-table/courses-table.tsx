import React from "react";
import { Course } from "../../../types/types";
import * as S from "./courses-table.styled";
import { getCoursesTableColumns } from "./courses-table.columns";

type Table = {
  rows: Course[];
};

export const CoursesTable: React.FC<Table> = ({ rows }) => {
  const columns = getCoursesTableColumns();

  return (
    <S.StyledDataGrid columns={columns} rows={rows} pageSizeOptions={[5]} />
  );
};
