import React from "react";
import Sheet from "react-modal-sheet";

import { SheetContainer } from "./styles";

interface Props {
  open: boolean;
  handleClose: () => void;
}

function CommentModal({ open, handleClose }: Props): React.ReactElement {
  return (
    <Sheet isOpen={open} onClose={handleClose}>
      <SheetContainer>
        <Sheet.Header />
        <Sheet.Content>{/* Your sheet content goes here */}</Sheet.Content>
      </SheetContainer>

      <Sheet.Backdrop />
    </Sheet>
  );
}

export default CommentModal;
