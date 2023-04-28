import React from "react";
import { useRouter } from "next/router";

import FindPasswordMsg from "../../../components/atoms/FindPasswordMsg";
import SignButton from "../../../components/atoms/SignButton";
import SignInputBox from "../../../components/atoms/SignInputBox";
import SignMessage from "../../../components/atoms/SignMessage";
import {
  Input,
  InputFormBottom,
  InputFormTop,
  InputFormWrap,
  Title,
} from "../../../pageStyles/accounts/login/styles";

function Login(): React.ReactElement {
  const router = useRouter();

  const onClickLogin = (e) => {
    e.preventDefault();
    router.push("/accounts/login");
  };

  const onClickSignUp = (e) => {
    e.preventDefault();
    router.push("/accounts/signup");
  };

  const onClickResetPW = (e) => {
    e.preventDefault();
    router.push("/accounts/signup");
  };

  return (
    <InputFormWrap>
      <InputFormTop>
        <Title>Happy Birthday</Title>
        <Input>
          <SignInputBox label="아이디" />
          <SignInputBox label="비밀번호" />
        </Input>
        <SignButton label="로그인" onClick={onClickLogin} />
        <FindPasswordMsg onClick={onClickResetPW} />
      </InputFormTop>
      <InputFormBottom>
        <SignMessage
          question="계정이 없으신가요?"
          answer="가입하기"
          onClick={onClickSignUp}
        />
      </InputFormBottom>
    </InputFormWrap>
  );
}

export default Login;
