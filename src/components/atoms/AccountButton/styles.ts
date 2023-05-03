import { styled } from "@mui/material/styles";

export const ButtonWrap = styled("div")`
  margin: 10px 40px 6px;
  display: inline-block;
`;

export const PictureWrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>`
  margin-bottom: 12px;
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  flex-basis: 380.32px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled("button")<{ isConfirmed?: boolean }>`
  width: 100%;
  height: 100%;

  color: white;
  border-color: transparent;
  border-radius: 7px;
  height: 32px;
  cursor: ${(props) => (props.isConfirmed ? "pointer" : "unset")};

  background-color: ${(props) => (props.isConfirmed ? "#0095f6" : "#4cb5f9")};
  &:hover {
    background-color: #1877f2;
  }
`;
