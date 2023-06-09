import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

export const StyledModal = styled(Modal)`
  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const ModalContainer = styled("div")`
  width: 100%;
  height: 100%;
`;

export const CommentModalBox = styled(Box)`
  width: 100%;
  height: 60%;
  background: white;
`;
