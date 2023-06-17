import { Avatar } from "@mui/material";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

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
  padding: 10px;
  width: 300px;
`;

export const PostHeader = styled("div")`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const StyledAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
  object-fit: cover;
  margin: 15px;
`;

export const PostHeaderText = styled("div")`
  font-family: NotoSans, sans-serif;
  font-size: 17px;
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
`;

export const ImageWrap = styled("div")`
  display: flex;
  justify-content: center;
  height: 50%;
  width: 100%;
  flex: 4;
`;
