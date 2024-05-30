import React from "react";
import * as S from "./dashboard-card.styled";
import { CustomTypography } from "../custom-typography";
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
              <CustomTypography variant="h5">{title}</CustomTypography>
            </S.InnerDiv>
          </S.HeaderDiv>

          <Box>{CardComponent}</Box>
        </div>
      </S.RootBox>
    </>
  );
};
