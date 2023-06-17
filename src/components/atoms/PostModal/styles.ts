import { Avatar } from "@mui/material";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import ClampLines from "react-clamp-lines";

export const ModalStyled = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled("div")`
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 10px;
  width: 300px;
`;

export const PostHeader = styled("div")`
  width: 100%;
  height: 60px;
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
  object-fit: cover;
  margin: 5px;
`;

export const PostHeaderText = styled("div")`
  font-family: NotoSans, sans-serif;
  font-size: 15px;
  font-weight: 500;
`;

export const Circle = styled("div")`
  padding: 0 5px;
  color: #737373;
  font-family: NotoSans, sans-serif;
`;

export const PostDate = styled("div")`
  color: #737373;
  font-family: NotoSans, sans-serif;
  font-size: 15px;
`;

export const ImageWrap = styled("div")`
  display: flex;
  justify-content: center;
  height: 50%;
  width: 100%;
  flex: 3;
`;

export const TextStyled = styled("div")`
  display: flex;
  flex-direction: column;

  font-family: NotoSans, sans-serif;
  text-align: left;

  &.grayText {
    color: #555555;
    font-family: NotoSans-light, sans-serif;
  }
`;

export const ContentText = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: start;
  font-size: 12px;
  text-align: left;
  a {
    display: flex;
    font-weight: 600;
    padding-right: 5px;
    font-size: 13px;
  }
`;

export const ClampText = styled(ClampLines)`
  text-align: left;
  button {
    color: #555555;
    border: none;
    background-color: transparent;
    padding: 0;
    font-family: NotoSans, sans-serif;
  }
`;
