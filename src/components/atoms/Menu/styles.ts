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
