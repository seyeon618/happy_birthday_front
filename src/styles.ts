import { styled } from "@mui/material/styles";

export const PictureWrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>`
  margin-bottom: 12px;
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  flex-basis: 380.32px;
  justify-content: center;
  align-items: center;
`;

export const Picture = styled("div")`
  background-repeat: no-repeat;
  background-size: 360px 510px;
  width: 360px;
  height: 450px;
`;