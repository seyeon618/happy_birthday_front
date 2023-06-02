import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContentWrap = styled("div")`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  white-space: nowrap;
`;

export const Content = styled("div")`
  width: 100%;
  height: 100%;
`;

export const PostHeader = styled("div")`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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

export const ImageGalleryWrap = styled("div")`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
`;

export const ImageWrap = styled("div")`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  label {
    margin: auto auto 35px;
    width: 100%;
    height: 70%;
  }
`;

export const CurImage = styled("img")`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
