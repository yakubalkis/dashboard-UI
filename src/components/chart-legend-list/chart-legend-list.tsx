import React from "react";
import * as S from "./chart-legend-list.styled";
import { Typography } from "@mui/material";

type Props = {
  legendTitles: string[];
  colors: string[];
};

export const LegendList: React.FC<Props> = ({ legendTitles, colors }) => {
  const legendListItems = legendTitles?.map((title, i) => {
    return (
      <li key={title} style={{ marginLeft: "24px" }}>
        <S.StyledSpan style={{ color: colors[i] }}>•</S.StyledSpan>

        <Typography variant="body2" style={{ color: "#000000" }}>
          {title}
        </Typography>
      </li>
    );
  });

  return <S.StyledUl>{legendListItems}</S.StyledUl>;
};
