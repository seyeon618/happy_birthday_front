import React from "react";
import { Dispatch, SetStateAction } from "react";
import { OutlinedInput } from "@mui/material";

import { InputBox, InputFormWrap } from "./styles";

interface Props {
  label: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

function SignInputBox({ label, text, setText }: Props): React.ReactElement {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <InputFormWrap>
      <InputBox>
        <OutlinedInput placeholder={label} onChange={handleChange} />
      </InputBox>
    </InputFormWrap>
  );
}

export default SignInputBox;
