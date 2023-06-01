import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  height: 100vh;
`;

export const Header = styled("div")`
  height: 50px;
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

export const ImageWrap = styled("div")`
  width: 300px;
  height: 100%;

  display: flex;
  justify-content: center;

  label {
    margin: auto auto 35px;
    width: 100%;
    height: 70%;
  }
`;

export const ImageContainer = styled("div")`
  display: inline;
`;

export const CurImage = styled("img")<{ isFeat: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => (props.isFeat ? "cover" : "contain")};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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

export const TextWrap = styled("div")`
  display: flex;
  justify-content: center;
`;

export const TagWrap = styled("textarea")`
  width: 300px;
  height: 100px;
  font-family: NotoSans, sans-serif;
`;
