import React from "react";
import { useRouter } from "next/router";

import AlertDialog from "../../../components/atoms/AlertDialog";
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
import {
  AddMessage,
  GuideMessage,
  MessageWrap,
  SubMessage,
} from "../../../style/accounts/singup/styles";

function SignUp(): React.ReactElement {
  const router = useRouter();

  const onClickLogin = (e) => {
    e.preventDefault();
    router.push("/accounts/login");
  };

  return (
    <WholeWrap>
      <CardWrap>
        <Article>
          <InputFormWrap>
            <InputFormTop>
              <Title>Happy Birthday</Title>
              <GuideMessage>
                영서의 생일을 축하하기 위해 만든 서비스 입니다.
              </GuideMessage>
              <GuideMessage>가입 후 축하글을 남겨주세요:)</GuideMessage>
              <Input>
                <SignInputBox label="실명" />
                <SignInputBox label="아이디" />
                <SignInputBox label="비밀번호" />
              </Input>
              <MessageWrap>
                <SubMessage>
                  실명이 부담스럽다면, 익명으로 하셔도 상관없습니다. 그치만 누가
                  축하했는지 알리기 위함이니 가급적 실명으로 해주세요!!
                  <AddMessage>
                    <AlertDialog
                      title="Happy Birthday"
                      content="작성 예정"
                      buttonText="더 알아보기"
                      closeButtonText="닫기"
                    />
                  </AddMessage>
                </SubMessage>
              </MessageWrap>
              <SignButton label="로그인" onClick={onClickLogin} />
            </InputFormTop>
            <InputFormBottom>
              <SignMessage
                question="계정이 있으신가요?"
                answer="로그인"
                onClick={onClickLogin}
              />
            </InputFormBottom>
          </InputFormWrap>
        </Article>
      </CardWrap>
    </WholeWrap>
  );
}

export default SignUp;
