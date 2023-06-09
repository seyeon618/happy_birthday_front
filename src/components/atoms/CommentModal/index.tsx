import React from "react";

import { CommentModalBox, ModalContainer, StyledModal } from "./styles";

interface Props {
  open: boolean;
  handleClose: () => void;
}

function CommentModal({ open, handleClose }: Props): React.ReactElement {
  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalContainer>
        <CommentModalBox>{"content"}</CommentModalBox>
      </ModalContainer>
    </StyledModal>
  );
}

export default CommentModal;
