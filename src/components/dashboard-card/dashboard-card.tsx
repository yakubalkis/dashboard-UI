import React from "react";
import * as S from "./dashboard-card.styled";
import { Box } from "@mui/material";

type Props = {
  title: string;
  CardComponent: React.ReactNode;
};

export const DashboardCard: React.FC<Props> = ({ title, CardComponent }) => {
  return (
    <>
      <S.RootBox>
        <div style={{ width: "100%" }}>
          <S.HeaderDiv>
            <S.InnerDiv>
              <S.StyledTypography variant="h5">{title}</S.StyledTypography>
            </S.InnerDiv>
          </S.HeaderDiv>

          <Box>{CardComponent}</Box>
        </div>
      </S.RootBox>
    </>
  );
};
