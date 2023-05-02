import React from "react";
import { useRouter } from "next/router";

import FindPasswordMsg from "../../../components/atoms/FindPasswordMsg";
import SignButton from "../../../components/atoms/SignButton";
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
  const router = useRouter();
  const isMobileVariable = isMobile();

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
        </Article>
      </CardWrap>
    </WholeWrap>
  );
}

export default Login;
