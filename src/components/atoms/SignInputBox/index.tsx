import React from "react";
import { Dispatch, SetStateAction } from "react";
import { OutlinedInput } from "@mui/material";

import { InputBox, InputFormWrap } from "./styles";

interface Props {
  label: string;
  setText: Dispatch<SetStateAction<string>>;
  setState: Dispatch<SetStateAction<boolean>>;
}

function SignInputBox({ label, setText, setState }: Props): React.ReactElement {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    setState(event.target.value.length >= 1);
  };

  const disableZoomIn = (event) => {
    event.target.scrollIntoView();
  };

  return (
    <InputFormWrap>
      <InputBox>
        <OutlinedInput
          placeholder={label}
          onChange={handleChange}
          onFocus={disableZoomIn}
          autoComplete={""}
        />
      </InputBox>
    </InputFormWrap>
  );
}

export default SignInputBox;
