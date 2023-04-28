import React from "react";
import { OutlinedInput } from "@mui/material";

import { InputBox, InputFormWrap } from "./styles";

interface Props {
  label: string;
}

function SignInputBox({ label }: Props): React.ReactElement {
  return (
    <InputFormWrap>
      <InputBox>
        <OutlinedInput placeholder={label} />
      </InputBox>
    </InputFormWrap>
  );
}

export default SignInputBox;
