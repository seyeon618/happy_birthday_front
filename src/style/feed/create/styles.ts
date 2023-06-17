import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Header = styled("div")`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  border-bottom: 0.5px solid #dbdbdb;
`;

export const IconButtonStyled = styled(IconButton)`
  flex-grow: 0.7;
  padding: 0;
`;

export const HeaderText = styled("div")`
  flex-grow: 4;
  font-family: NotoSans, sans-serif;
  text-align: center;
  margin: auto;
`;

export const ShareText = styled("div")`
  flex-grow: 0.7;
  font-family: NotoSans, sans-serif;
  text-align: center;
  margin: auto;
  color: #0195f6;
`;

export const ImageGalleryWrap = styled("div")`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
`;

export const ImageButton = styled("button")<{ visible: boolean }>`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  background: none;
  border: none;
  flex-grow: 1;
`;

export const ContentWrap = styled("div")`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
`;

export const ImageWrap = styled("div")`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;
  margin: 30px 0;
  label {
    width: 100%;
    height: 100%;
  }
`;

export const Toggle = styled("div")`
  width: 30px;
  height: 30px;
  position: relative;
  top: -40px;
  left: 7px;
  display: flex;
  justify-content: center;

  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const EmptyImageWrap = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: NotoSans, sans-serif;
`;

export const UploadButton = styled("div")`
  display: flex;
  justify-content: center;

  input[type="file"] {
    /* 파일 필드 숨기기 */
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
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
  margin: 15px 15px 15px 0px;
`;

export const PostHeaderText = styled("div")`
  font-family: NotoSans, sans-serif;
  font-size: 17px;
  font-weight: 500;
`;

export const TextWrap = styled("div")`
  display: flex;
  justify-content: center;
`;

export const TextArea = styled("textarea")`
  width: 100%;
  height: 150px;
  border: none;
  font-family: NotoSans, sans-serif;
`;

export const HintMessage = styled("div")`
  font-family: NotoSans, sans-serif;
  font-size: 13px;
  color: #999999;
  text-align: end;
`;
