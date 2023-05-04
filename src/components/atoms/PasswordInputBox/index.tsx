import React, { Dispatch, SetStateAction } from "react";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";

import { InputBox, InputFormWrap } from "./styles";

interface Props {
  label: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  setState: Dispatch<SetStateAction<boolean>>;
}

function PasswordInputBox({
  label,
  text,
  setText,
  setState,
}: Props): React.ReactElement {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    setState(event.target.value.length >= 3);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <InputFormWrap>
      <InputBox>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            text.length >= 1 && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? "숨기기" : "비밀번호 표시"}
                </IconButton>
              </InputAdornment>
            )
          }
          placeholder={label}
          onChange={handleChange}
        />
      </InputBox>
    </InputFormWrap>
  );
}

export default PasswordInputBox;
