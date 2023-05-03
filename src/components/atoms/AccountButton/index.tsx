import React from "react";

import { Button, ButtonWrap } from "./styles";

interface Props {
  label: string;
  isConfirmed: boolean;
  onClick: (e) => void;
}

function AccountButton({
  label,
  isConfirmed,
  onClick,
}: Props): React.ReactElement {
  return (
    <ButtonWrap>
      <Button
        disabled={!isConfirmed}
        onClick={onClick}
        isConfirmed={isConfirmed}
      >
        {label}
      </Button>
    </ButtonWrap>
  );
}

export default AccountButton;
