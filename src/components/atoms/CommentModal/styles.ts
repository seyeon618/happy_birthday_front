import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import ClampLines from "react-clamp-lines";
import Sheet from "react-modal-sheet";

export const SheetContainer = styled(Sheet.Container)`
  height: 70% !important;
  display: flex;
  flex-direction: column;
`;

export const SheetHeader = styled(Sheet.Header)`
  height: 81px;
`;

export const SheetContent = styled(Sheet.Content)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 100%;
  touch-action: auto !important;
`;

export const CommentHeader = styled("div")`
  height: 40px;
  width: 100%;
  font-size: 16px;
  font-family: NotoSans, sans-serif;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  margin-top: 40px;
`;

export const CommentContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`;

export const CommentWrap = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const StyledAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
  object-fit: cover;
  margin: 15px;
`;

export const CommentContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const CommentIDWrap = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

export const StyledId = styled("div")`
  font-family: NotoSans, sans-serif;
  font-weight: 600;
  font-size: 16px;
`;

export const StyledDate = styled("div")`
  font-family: NotoSans, sans-serif;
  color: #a4a4a4;
  font-size: 14px;
`;

export const ContentWrap = styled("div")`
  font-family: NotoSans, sans-serif;
  font-size: 16px;
  padding-right: 30px;
`;

export const ClampText = styled(ClampLines)`
  button {
    color: #555555;
    border: none;
    background-color: transparent;
    padding: 0;
    font-family: NotoSans, sans-serif;
  }
`;

export const Footer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  padding-top: 5px;
  padding-bottom: 20px;
`;

export const StyledInput = styled(Input)`
  width: 75%;
  border: 1px solid #999999;
  border-radius: 30px;
  padding: 7px 20px;
`;

export const CommentMyAvatar = styled(Avatar)`
  width: 45px;
  height: 45px;
  object-fit: cover;
`;

export const CommentUploadButton = styled(Button)`
  padding: 4px 0 5px;
  min-width: 0;
  font-family: NotoSans, sans-serif;
`;

export const EmptyContentWrap = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const EmptyGuideMessage = styled("div")`
  font-family: NotoSans, sans-serif;

  &.main {
    font-size: 20px;
    font-weight: 600;
    color: #000000;
  }

  &.sub {
    font-size: 16px;
    color: #999999;
  }
`;
