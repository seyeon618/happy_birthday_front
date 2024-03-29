import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import qs from "qs";
import { useCookies } from "react-cookie";

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
import Footer from "../../../components/common/Footer";
import {
  Input,
  InputFormBottom,
  InputFormTop,
  InputFormWrap,
  Title,
} from "../../../style/accounts/login/styles";
import isMobile from "../../../utils/isMobile";
function Login(): React.ReactElement {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [existId, setExistId] = useState(false);
  const [existPw, setExistPw] = useState(false);
  const [cookies, setCookie] = useCookies(["id"]);

  const router = useRouter();
  const isMobileVariable = isMobile();

  const onClickLogin = (e) => {
    e.preventDefault();

    const data = {
      username: id,
      password: pw,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASEURL}/accounts/login`,
        qs.stringify(data),
        config
      )
      .then((res) => {
        setCookie("id", res.data.access_token);
        router.push("/home");
      })
      .catch((error) => {
        console.log(error.responsee);
      });
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
    <div>
      <WholeWrap>
        <CardWrap>
          <Article>
            <InputFormWrap>
              <InputFormTop>
                <Title>Happy Birthday</Title>
                <form>
                  <Input>
                    <SignInputBox
                      label="아이디"
                      setText={setId}
                      setState={setExistId}
                    />
                    <PasswordInputBox
                      label="비밀번호"
                      text={pw}
                      setText={setPw}
                      setState={setExistPw}
                    />
                  </Input>
                </form>
                <AccountButton
                  label="로그인"
                  isConfirmed={existId && existPw}
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
      <Footer />
    </div>
  );
}

export default Login;
