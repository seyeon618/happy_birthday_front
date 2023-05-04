import { styled } from "@mui/material/styles";

export const MessageWrap = styled("div")`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Question = styled("div")`
  display: inline-block;

  font-family: NotoSans, serif;
  font-size: 0.8rem;
  text-align: center;
  color: black;
`;

export const Answer = styled("button")`
  display: inline-block;

  font-family: NotoSans, serif;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  color: #0095f6;
  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
`;
