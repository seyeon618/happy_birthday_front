import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

export const MenuWrap = styled("div")`
  margin-right: 5px;
  margin-left: auto;
`;

export const StyledMenuItem = styled(MenuItem)`
  font-family: NotoSans, sans-serif;
  justify-content: center;

  &.emphasis {
    color: red;
  }
`;

export const AlterContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;

  border: 1px solid #a4a4a4;
  border-radius: 30px;
  background-color: white;
`;

export const MessageWrap = styled("div")`
  padding: 25px 20px 10px 20px;
`;

export const GuideMessage = styled("div")`
  width: 100%;
  font-family: NotoSans, sans-serif;
  font-size: 14px;
  padding-bottom: 10px;
  color: #a4a4a4;

  &.emphasis {
    font-weight: 600;
    font-size: 17px;
    color: black;
  }
`;

export const Button = styled("div")`
  padding: 10px 0;
  border-top: 1px solid #a4a4a4;
  font-family: NotoSans, sans-serif;

  &.emphasis {
    color: red;
    font-weight: 600;
  }
`;
