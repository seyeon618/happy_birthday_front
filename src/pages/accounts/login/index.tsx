import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import AccountButton from "../../../components/atoms/AccountButton";
import FindPasswordMsg from "../../../components/atoms/FindPasswordMsg";
import PasswordInputBox from "../../../components/atoms/PasswordInputBox";
import SignInputBox from "../../../components/atoms/SignInputBox";
import SignMessage from "../../../components/atoms/SignMessage";
import {
  Article,
  CardWrap,
  WholeWrap,
} from "../../../components/common/Card/styles";
import {
  Input,
  InputFormBottom,
  InputFormTop,
  InputFormWrap,
  Title,
} from "../../../style/accounts/login/styles";
import { Picture, PictureWrap } from "../../../styles";
import isMobile from "../../../utils/isMobile";

interface Props {
  isShowPicture: boolean;
}

function Login({ isShowPicture }: Props): React.ReactElement {
  const [loginCondition, setLoginCondition] = useState(true);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const router = useRouter();
  const isMobileVariable = isMobile();

  const onClickLogin = (e) => {
    e.preventDefault();
    console.log("id: " + id);
    console.log("pw: " + pw);

    // axios.post(`${process.env.REACT_APP_BASEURL}/`);

    setLoginCondition(id.length >= 1 && pw.length >= 1);

    // router.push("/accounts/login");
  };

  const onClickSignUp = (e) => {
    e.preventDefault();
    router.push("/accounts/signup");
  };

  const onClickResetPW = (e) => {
    e.preventDefault();
    router.push("/accounts/password/reset");
  };

  return (
    <WholeWrap>
      <CardWrap>
        <Article>
          {isShowPicture && (
            <PictureWrap isMobile={isMobileVariable}>
              <Picture />
            </PictureWrap>
          )}
          <InputFormWrap>
            <InputFormTop>
              <Title>Happy Birthday</Title>
              <Input>
                <SignInputBox label="아이디" text={id} setText={setId} />
                <PasswordInputBox label="비밀번호" text={pw} setText={setPw} />
              </Input>
              <AccountButton
                label="로그인"
                isConfirmed={loginCondition}
                onClick={onClickLogin}
              />
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
        </Article>
      </CardWrap>
    </WholeWrap>
  );
}

export default Login;
