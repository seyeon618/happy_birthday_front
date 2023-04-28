import { styled } from "@mui/material/styles";

export const InputFormWrap = styled("div")`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputFormTop = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 8.5;
  justify-content: center;
  margin: 0 0 10px;

  border: 1px solid #dbdbdb;
  border-radius: 1px;
`;

export const Title = styled("div")`
  margin: 32px auto 12px;
  width: 180px;

  font-family: Lobstar, serif;
  font-size: 28px;
`;

export const Input = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`;

export const InputFormBottom = styled("div")`
  width: 100%;
  height: 100%;
  flex: 1.5;

  border: 1px solid #dbdbdb;
  border-radius: 1px;
`;
