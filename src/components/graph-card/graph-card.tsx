import React from "react";
import { Box, Divider } from "@mui/material";
import * as S from "./graph-card.styled";
import { CustomTypography } from "../custom-typography";

type CardContentType = {
  title: string;
  boldTypographyContent: string;
  smallTypographyContent?: string;
};

type ContentType = {
  mainTitle: string;
  cardContents?: CardContentType[];
};

type Props = {
  content: ContentType;
  GraphComponent: React.ReactNode;
};

export const GraphCard: React.FC<Props> = ({ content, GraphComponent }) => {
  const statusCards = content.cardContents
    ? content.cardContents?.map((cardContent, i) => {
        return (
          <React.Fragment key={cardContent?.title}>
            <div>
              <Box>
                <S.StyledTypography variant="body1">
                  {cardContent?.title}
                </S.StyledTypography>
              </Box>

              <S.PercentageDiv>
                <S.BoldTypography>
                  {cardContent?.boldTypographyContent}

                  {cardContent?.smallTypographyContent ? (
                    <S.StyledTypography marginLeft={"10px"}>
                      {cardContent?.smallTypographyContent}
                    </S.StyledTypography>
                  ) : null}
                </S.BoldTypography>
              </S.PercentageDiv>
            </div>
            {content.cardContents && i !== content.cardContents.length - 1 && (
              <S.StyledDivider
                orientation="vertical"
                variant="middle"
                flexItem
              />
            )}
          </React.Fragment>
        );
      })
    : null;

  return (
    <>
      <S.RootBox>
        <div style={{ width: "100%" }}>
          <S.HeaderDiv>
            <S.InnerDiv>
              <CustomTypography variant="h5">
                {content.mainTitle}
              </CustomTypography>
            </S.InnerDiv>
          </S.HeaderDiv>

          {statusCards ? <S.OverallStats>{statusCards}</S.OverallStats> : null}

          {statusCards ? (
            <Divider
              style={{ marginTop: "24px" }}
              orientation="horizontal"
              variant="middle"
              flexItem
            />
          ) : null}

          <S.StyledGraphBox>{GraphComponent}</S.StyledGraphBox>
        </div>
      </S.RootBox>
    </>
  );
};
