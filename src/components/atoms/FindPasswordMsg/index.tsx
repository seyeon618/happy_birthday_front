import React from "react";

import { MessageWrap } from "./styles";

interface Props {
  onClick: (e) => void;
}

function FindPasswordMsg({ onClick }: Props): React.ReactElement {
  return (
    <MessageWrap onClick={onClick}>{"비밀번호를 잊으셨나요?"}</MessageWrap>
  );
}

export default FindPasswordMsg;
