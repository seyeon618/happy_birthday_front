import { styled } from "@mui/material/styles";

export const WholeWrap = styled("div")`
  min-height: calc(100vh - 35px);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`;

export const CardWrap = styled("div")`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0;
  order: 4;
  padding: 0;
  position: relative;
  justify-content: center;
`;

export const Article = styled("div")`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-left: 0;
  width: 100%;
  height: 500px;
`;
