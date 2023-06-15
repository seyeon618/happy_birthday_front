import React from "react";

import { AlterContainer, Button, GuideMessage, MessageWrap } from "./styles";

interface Props {
  id: number;
  handleClickDelete: (id: number) => void;
  handleClose: () => void;
}

function ConfirmDeleteAlert({
  id,
  handleClickDelete,
  handleClose,
}: Props): React.ReactElement {
  return (
    <AlterContainer>
      <MessageWrap>
        <GuideMessage className={"emphasis"}>
          게시물을 삭제하시겠어요?
        </GuideMessage>
        <GuideMessage>영구 삭제되니 신중히 선택해주세요!</GuideMessage>
      </MessageWrap>
      <Button
        className={"emphasis"}
        onClick={() => {
          handleClickDelete(id);
          handleClose();
        }}
      >
        삭제
      </Button>
      <Button onClick={handleClose}>취소</Button>
    </AlterContainer>
  );
}

export default ConfirmDeleteAlert;
