import React from "react";
import { useRouter } from "next/router";

import Praying from "../../../../../public/Image/praying.png";
import {
  Article,
  CardWrap,
  WholeWrap,
} from "../../../../components/common/Card/styles";
import {
  Account,
  BackLoginMessage,
  FormBottom,
  FormTop,
  FormWrap,
  GuideMessage,
  LockIcon,
  MessageWrap,
  NewAccount,
  PlayingImage,
  Question,
  Sep,
  SepText,
  SepWrap,
} from "../../../../style/accounts/password/reset/styles";

function ResetPassWord(): React.ReactElement {
  const router = useRouter();

  const onClickSignUp = (e) => {
    e.preventDefault();
    router.push("/accounts/signup");
  };

  const onClickLogin = (e) => {
    e.preventDefault();
    router.push("/accounts/login");
  };

  return (
    <WholeWrap>
      <CardWrap>
        <Article>
          <FormWrap>
            <FormTop>
              <LockIcon />
              <Question>{"로그인에 문제가 있나요?"}</Question>
              <GuideMessage>
                {
                  "현재 본인인증을 진행하지 않고 있기 때문에, 잃어버린 비밀 번호는 복구가 어렵습니다."
                }
              </GuideMessage>
              <GuideMessage>
                {"아래 인스타 계정으로 문의 주시면 직접 찾아드리겠습니다."}
                <PlayingImage src={Praying} alt="Playing" />
              </GuideMessage>
              <Account>{"DM: seyeon_618"}</Account>
              <SepWrap>
                <Sep />
                <SepText>{"또는"}</SepText>
                <Sep />
              </SepWrap>
              <NewAccount>{"새 계정 만들기"}</NewAccount>
            </FormTop>

            <FormBottom>
              <MessageWrap>
                <BackLoginMessage onClick={onClickSignUp}>
                  {"로그인으로 돌아가기"}
                </BackLoginMessage>
              </MessageWrap>
            </FormBottom>
          </FormWrap>
        </Article>
      </CardWrap>
    </WholeWrap>
  );
}

export default ResetPassWord;
