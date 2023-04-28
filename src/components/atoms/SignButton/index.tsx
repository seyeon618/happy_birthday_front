import React from "react";

import { Button, ButtonWrap } from "./styles";

interface Props {
  label: string;
  onClick: (e) => void;
}

function SignButton({ label, onClick }: Props): React.ReactElement {
  return (
    <ButtonWrap>
      <Button onClick={onClick}>{label}</Button>
    </ButtonWrap>
  );
}

export default SignButton;
