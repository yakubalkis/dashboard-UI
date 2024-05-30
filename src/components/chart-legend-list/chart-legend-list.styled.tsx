import { styled } from "@mui/material";

export const StyledUl = styled("ul")`
  display: flex;
  flex-direction: row;
  margin-left: -25px;
  letter-spacing: 0.25px;
  align-items: center;
  li {
    list-style-type: none;
    display: flex;
    align-items: center;
  }
`;

export const StyledSpan = styled("span")`
  margin-right: 10px;
  margin-top: 1px;
  font-size: 2rem;
`;
