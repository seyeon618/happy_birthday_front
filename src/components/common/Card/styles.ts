import { styled } from "@mui/material/styles";

export const WholeWrap = styled("div")`
  min-height: 100vh;
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
  padding-bottom: 32px;
  height: 500px;
`;
