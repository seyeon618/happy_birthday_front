import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GuideMessage = styled("div")`
  font-family: NotoSans;
  font-size: 8px;
  font-weight: 600;
  color: #737780;
  text-align: center;

  width: 80%;
  margin: 0 auto;
`;

export const MessageWrap = styled("div")`
  display: inline-flex;
`;
export const SubMessage = styled("div")`
  font-family: NotoSans;
  font-size: 6px;
  color: #737780;

  margin: 10px 40px 6px;
  display: inline-block;
`;

export const AddMessage = styled("div")`
  display: inline-block;
  text-align: right;
  margin-left: 5px;
  right: 0;
`;

export const AvatarStyled = styled(Avatar)`
  width: 80px;
  height: 80px;
`;

export const AvatarWrap = styled("div")`
  display: flex;
  justify-content: center;
  padding: 35px 0;
`;

export const UploadBtn = styled("div")`
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
