import { FormControl } from "@mui/base";
import { styled } from "@mui/material/styles";

export const InputFormWrap = styled("div")`
  height: 34px;
  margin: 0 40px 6px;
  display: inline-block;
`;

export const InputBox = styled(FormControl)`
  font-family: Lobstar, serif;
  &.MuiFormControl-root {
    width: 100%;
    height: 100%;
  }

  .MuiInputBase-input {
    font-family: NotoSans, serif;
    font-size: 0.8rem;

    &::placeholder {
      color: #737780;
      opacity: 1;
    }
  }

  .MuiInputBase-root {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  & .MuiOutlinedInput-root {
    .MuiOutlinedInput-notchedOutline {
      border-color: #dbdbdb;
      border-radius: 3px;
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #dbdbdb;
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid #a8a8a8;
    }
  }
`;
